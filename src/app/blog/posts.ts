export type BlogSection = {
  heading?: string;
  body: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  heroImage: string;
  heroImageAlt: string;
  podcastUrl: string;
  podcastTitle: string;
  takeaways: string[];
  sections: BlogSection[];
};

const posts: BlogPost[] = [
  {
    slug: "nova-scotia-sparkling-coastal-terroir",
    title: "Episode synopsis: Nova Scotia sparkling wine and coastal terroir",
    description:
      "How Bay of Fundy tides, traditional-method winemakers and cool-climate fruit are shaping world-class Nova Scotia sparkling wine.",
    excerpt:
      "Mark uncorks why Atlantic Canada's sparkling wines punch above their weight, from tidal swings and growing degree days to patient lees aging.",
    date: "2025-01-18",
    readTime: "6 minute read",
    tags: ["Episode synopsis", "Nova Scotia wine", "Sparkling"],
    heroImage: "/blog/atlantic-sparkling.svg",
    heroImageAlt: "Sparkling wine bottle with tidal rings and coastal lines",
    podcastUrl: "https://open.spotify.com/show/the-dewolf-wine-experience",
    podcastTitle: "Listen to the Nova Scotia sparkling episode",
    takeaways: [
      "Nova Scotia's dramatic diurnal shifts and Bay of Fundy influence keep acidity laser sharp—ideal for traditional-method sparkling wine.",
      "Producers are blending classic grapes with hybrids to handle coastal weather while protecting texture and autolytic depth.",
      "Extended lees aging is the quiet advantage: more local wineries are holding bottles to deliver brioche and saline complexity.",
    ],
    sections: [
      {
        heading: "Why this episode matters for coastal sparkling wine",
        body: [
          "Atlantic Canada is no longer a niche curiosity for bubbles. The Bay of Fundy creates one of the world's largest tidal swings, locking in acidity and tension that sparkling wine needs.",
          "Mark highlights how growers balance chardonnay, pinot noir and hybrids to maintain resilience while still chasing finesse in the glass.",
        ],
      },
      {
        heading: "Producers and methods you hear about",
        body: [
          "Traditional-method producers are leaning into longer tirage times, sometimes pushing past 36 months to build brioche and hazelnut notes without losing brightness.",
          "Estate programs are experimenting with barrel-fermented base wines and micro-oxygenation to keep texture without masking terroir.",
        ],
      },
      {
        heading: "Service, pairing and cellaring notes",
        body: [
          "Serve Nova Scotia sparkling closer to 9–10°C to let autolytic notes show while keeping orchard fruit crisp.",
          "Pairing ideas from the episode include pan-seared scallops with brown butter, fried chicken with honey, and celeriac remoulade for a vegetarian option.",
          "Most bottles are best within five years, but the episode shares cues—like persistent mousse and evolved brioche aromas—that signal which cuvées can rest longer.",
        ],
      },
      {
        heading: "Episode SEO keywords to note",
        body: [
          "Nova Scotia sparkling wine, Bay of Fundy tides, traditional method, lees aging, Atlantic Canada wine regions, cool climate acidity, seafood wine pairing.",
        ],
      },
    ],
  },
  {
    slug: "weeknight-pairing-real-life",
    title: "Episode synopsis: Pairing wine with real weeknight cooking",
    description:
      "Practical, zero-pretense food and wine pairings drawn from chef-driven dinners and Mark's Halifax events.",
    excerpt:
      "This synopsis covers how to choose wines for pantry-first meals—think roast chicken thighs, miso salmon and pantry pasta—without overthinking acidity and tannin.",
    date: "2025-01-11",
    readTime: "5 minute read",
    tags: ["Episode synopsis", "Food and wine pairing", "Weeknight cooking"],
    heroImage: "/blog/weeknight-pairing.svg",
    heroImageAlt: "Wine glass beside a skillet with aromatic herbs and citrus",
    podcastUrl: "https://open.spotify.com/show/the-dewolf-wine-experience",
    podcastTitle: "Listen to the weeknight pairing episode",
    takeaways: [
      "Start with the texture of the dish—not the protein—then match body and acid so the wine lifts the plate instead of coating it.",
      "Salt, acid and umami are the levers that let affordable wines shine with casual food.",
      "Keep two anchor bottles at home: a high-acid white (riesling, coastal chardonnay) and a chillable red (zweigelt, cabernet franc).",
    ],
    sections: [
      {
        heading: "A framework for easy pairing",
        body: [
          "Mark shares a simple ladder: texture, fat, acid, umami. If a dish is oily or creamy, reach for wines with drive—Albariño, Nova Scotia l'acadie or Loire chenin.",
          "For leaner plates, chillable reds with soft tannin (zweigelt, gamay, cabernet franc) give fruit and crunch without overpowering herbs or citrus.",
        ],
      },
      {
        heading: "Pairings listeners loved",
        body: [
          "Miso-glazed salmon with coastal chardonnay or dry riesling to mirror umami and salt.",
          "Roast chicken thighs with herbes de Provence alongside Beaujolais-Villages or Nova Scotia hybrid blends.",
          "Pasta aglio e olio gets a peppery lift from Sicilian frappato or a cool-climate pinot noir.",
        ],
      },
      {
        heading: "Service cues from the episode",
        body: [
          "Slightly chill lighter reds (14–15°C) to tighten tannins and let freshness lead.",
          "Finish plates with lemon or vinegar to refresh wines that might otherwise taste flat with richer food.",
          "Use wider white-wine stems for aromatic whites so stone fruit and florals can escape instead of staying tight and cold.",
        ],
      },
      {
        heading: "Episode SEO keywords to note",
        body: [
          "Wine pairing for weeknight meals, chillable red wine, Halifax sommelier tips, riesling with salmon, Beaujolais with roast chicken, easy wine pairing guide.",
        ],
      },
    ],
  },
  {
    slug: "hospitality-service-storytelling",
    title: "Episode synopsis: Hospitality, service and storytelling that sticks",
    description:
      "Mentoring young sommeliers, designing service that feels human, and building wine stories that guests remember long after the check is signed.",
    excerpt:
      "Mark unpacks how to build a guest-first service culture, including pre-shift storytelling, sensory training and how to handle tables that feel high stakes.",
    date: "2025-01-04",
    readTime: "7 minute read",
    tags: ["Episode synopsis", "Hospitality", "Service culture"],
    heroImage: "/blog/hospitality-storytelling.svg",
    heroImageAlt: "Host welcoming guests with a decanter and warm light",
    podcastUrl: "https://open.spotify.com/show/the-dewolf-wine-experience",
    podcastTitle: "Listen to the hospitality and storytelling episode",
    takeaways: [
      "Story-first service is faster to train: give teams three sensory hooks for each wine so they can guide without reciting tasting notes.",
      "Pre-shift briefs should mirror the guest journey—arrival, first pour, pivot points—so the team shares a common cadence.",
      "Handling a difficult table starts with curiosity: ask what success looks like for the guest, then shape pacing and pairings accordingly.",
    ],
    sections: [
      {
        heading: "Building a service culture that lasts",
        body: [
          "Mark shows how to structure mentorship for new sommeliers with short, daily sensory drills instead of quarterly tests that feel disconnected from service.",
          "He talks about modeling vulnerability—sharing misses from his own career—so younger staff see feedback as care, not critique.",
        ],
      },
      {
        heading: "Storytelling that respects the guest",
        body: [
          "Every bottle gets a three-beat story: origin, craft choice (like amphora or lees time) and a human detail about the grower or place.",
          "Tableside language focuses on outcomes (bright, lifted, savory) instead of jargon, helping guests link flavor to moments they already know.",
        ],
      },
      {
        heading: "Handling pressure moments",
        body: [
          "For VIP or corporate tables, Mark recommends a pacing map: anchor pours at moments of energy like toasts or plated courses, then breathe between.",
          "If a pairing is rejected, pivot by asking what the guest wants to feel—refreshment, comfort, nostalgia—then pick a bottle that supports that emotion.",
        ],
      },
      {
        heading: "Episode SEO keywords to note",
        body: [
          "Hospitality training podcast, sommelier mentorship, wine storytelling, guest experience design, restaurant service tips, Halifax wine expert.",
        ],
      },
    ],
  },
];

export const blogPosts = posts;

export function getSortedPosts(): BlogPost[] {
  return [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
