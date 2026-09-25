import type { SocialIcon } from "../config/site";

// Minimal inline SVG path data (24x24 viewBox), stroke/fill set by CSS currentColor.
export const ICONS: Record<SocialIcon, string> = {
  instagram: `<rect x="2" y="2" width="20" height="20" rx="5" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="12" cy="12" r="4.2" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="17.3" cy="6.7" r="1.1" fill="currentColor"/>`,
  tiktok: `<path d="M14.5 3c.3 2 1.7 3.6 3.7 3.9v2.7c-1.4 0-2.7-.4-3.7-1.2v6.4c0 3.1-2.5 5.2-5.3 5.2-2.9 0-5.2-2.3-5.2-5.2 0-2.9 2.5-5.3 5.4-5.2v2.8c-1.3-.1-2.5.9-2.5 2.4 0 1.3 1.1 2.4 2.4 2.4 1.4 0 2.5-1.1 2.5-2.6V3h2.7z" fill="currentColor"/>`,
  twitter: `<path d="M3 3l7.2 9.6L3.3 21h2.2l6-6.9 4.6 6.9H21l-7.5-10 6.5-7.5h-2.2l-5.5 6.4L7.2 3H3z" fill="currentColor"/>`,
  email: `<rect x="2.5" y="4.5" width="19" height="15" rx="2" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M3.5 6l8.5 6.5L20.5 6" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>`,
};
