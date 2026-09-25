# Notes

## Mobile hero background — aspect ratio

The mobile hero banner (`site/src/pages/index.astro`) currently uses
`big-skull.png` as a placeholder background, scoped to viewports ≤768px.

`big-skull.png` is roughly square (3125×3408) and the skull fills close to
the full frame edge-to-edge. On a tall phone screen, `background-size: cover`
crops the *sides* of a square-ish image (not the top/bottom), so the skull's
edges are likely to get clipped.

For the real asset, aim for:
- A portrait-oriented piece (taller than wide — phone viewports run roughly
  9:19.5).
- Generous negative space around the subject (see `dead.png` for an example
  of a composition with wide margins) so side-cropping on tall screens
  doesn't cut into the artwork.

## Mobile viewport — reducing scroll length

The gallery grid (`site/src/pages/index.astro`) stacks to a single column on
narrow mobile viewports, so scrolling through all ~31 pieces is long.

Options considered:
1. **2-column grid on mobile** — tighten the grid breakpoint so mobile shows
   2 columns instead of 1. Cheap, no downside, nothing hidden.
2. **Horizontal swipe carousel instead of a vertical grid on mobile** —
   bounded height, feels native/gallery-like. Downside: less discoverable
   (no visible sense of "how much is there"), needs a swipe affordance/dots.
3. **Teaser + "See all"** — show ~6-9 tiles on the homepage, then either
   expand inline or link to a dedicated `/gallery` route with the full grid.
   Keeps the homepage a lean splash; costs one extra tap to see everything.

Leaning direction: do #1 regardless (free win), paired with #3 as a
dedicated `/gallery` page rather than inline-expand — fits the "splash
page" concept better than one long scrolling page, and gives a clean URL
to link from socials/bio later. Not yet implemented.
