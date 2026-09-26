// Edit this file to update site-wide text and social links.
// Any link left as "#" is hidden from the socials row.

export const SITE = {
  name: "Penno", // TODO: replace with the artist name / handle shown in <title> and OG tags
  tagline: "Illustration & dark art", // shown small under the logo — keep it short or blank it out
  description: "Illustration and dark art portfolio.",
};

export type SocialIcon = "instagram" | "tiktok" | "twitter" | "email";

export const SOCIALS: { label: string; href: string; icon: SocialIcon, active: boolean }[] = [
  { label: "Instagram", href: "#", icon: "instagram", active: true },
  { label: "TikTok", href: "#", icon: "tiktok", active: false  },
  { label: "Twitter/X", href: "#", icon: "twitter", active: false  },
  { label: "Email", href: "mailto:hello@example.com", icon: "email", active: true },
];
