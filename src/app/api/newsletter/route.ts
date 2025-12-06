import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";

// Temporary logging to help diagnose production issues. Remove once stable.
const log = (...args: unknown[]) =>
  console.log("[newsletter-api]", ...args);

const supabaseUrl =
  process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

type Body = {
  email?: string;
  firstName?: string;
};

export async function POST(request: Request) {
  if (!supabaseUrl || !supabaseServiceKey) {
    log("Missing Supabase envs", { supabaseUrlPresent: !!supabaseUrl });
    return NextResponse.json(
      { error: "Newsletter is not configured yet." },
      { status: 500 },
    );
  }

  let body: Body;
  try {
    body = (await request.json()) as Body;
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const email = (body.email || "").trim().toLowerCase();
  const firstName = (body.firstName || "").trim();

  if (!email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    return NextResponse.json({ error: "Valid email is required." }, { status: 400 });
  }

  const supabase = createClient(supabaseUrl, supabaseServiceKey);

  const { error } = await supabase.from("newsletter_subscribers").insert({
    email,
    first_name: firstName || null,
  });

  if (error) {
    // If already subscribed, return success so users aren't blocked.
    if (error.code === "23505") {
      log("Duplicate email", { email });
      return NextResponse.json({ success: true });
    }
    log("Insert error", error);
    return NextResponse.json(
      { error: "Unable to subscribe right now. Please try again." },
      { status: 500 },
    );
  }

  log("Subscribed", { email });

  // Optional: send notification email if Resend is configured.
  const resendApiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.RESEND_FROM_EMAIL;
  const notifyEmail = process.env.RESEND_NOTIFY_EMAIL;

  if (resendApiKey && fromEmail && notifyEmail) {
    try {
      const resend = new Resend(resendApiKey);
      await resend.emails.send({
        from: fromEmail,
        to: notifyEmail,
        subject: "New newsletter subscriber",
        text: `Email: ${email}${firstName ? `\nFirst name: ${firstName}` : ""}`,
      });
      log("Notification sent");
    } catch (sendError) {
      log("Notification send failed", sendError);
      // Do not fail the signup on notification errors.
    }
  }

  return NextResponse.json({ success: true });
}
