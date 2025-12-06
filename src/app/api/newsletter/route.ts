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

    // Send a simple welcome email to the subscriber.
    try {
      const resend = new Resend(resendApiKey);
      const safeName = firstName || "there";
      const logoUrl =
        "https://www.thedewolfwineexperience.com/dewolf-logo.png";
      await resend.emails.send({
        from: fromEmail,
        to: email,
        subject: "Welcome to DeWolf Wine Experience",
        text: `Hi ${safeName},\n\nThanks for joining the DeWolf Wine Experience newsletter. You’ll get updates on new episodes, events, and travel ideas.\n\nCheers,\nMark DeWolf`,
        html: `<table width="100%" cellpadding="0" cellspacing="0" style="background:#f7f7f5;padding:24px 0;font-family:'Helvetica Neue',Arial,sans-serif;">
  <tr>
    <td align="center">
      <table width="640" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:16px;padding:32px;box-shadow:0 8px 32px rgba(0,0,0,0.05);">
        <tr>
          <td align="center" style="padding-bottom:24px;">
            <img src="${logoUrl}" alt="DeWolf Wine Experience" width="160" style="display:block;max-width:160px;height:auto;">
          </td>
        </tr>
        <tr>
          <td style="font-size:18px;color:#0f172a;font-weight:600;padding-bottom:12px;">
            Hi ${safeName},
          </td>
        </tr>
        <tr>
          <td style="font-size:16px;color:#334155;line-height:1.6;padding-bottom:20px;">
            Thanks for joining the DeWolf Wine Experience newsletter. You’ll get updates on new podcast episodes, events, and travel ideas—always focused on wine, food, and hospitality.
          </td>
        </tr>
        <tr>
          <td style="font-size:16px;color:#334155;line-height:1.6;padding-bottom:24px;">
            Cheers,<br>
            Mark DeWolf
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>`,
      });
      log("Welcome email sent");
    } catch (sendError) {
      log("Welcome email send failed", sendError);
    }
  }

  return NextResponse.json({ success: true });
}
