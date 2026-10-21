# Visual and functional QA

Verified 21 October 2026 against the running Next.js frontend at http://localhost:3000.

## Build gates

- `npm run build`: exit 0, 31 static pages generated. Full output: `references/build.log`.
- `npm run lint`: exit 0, no warnings after naming the PostCSS configuration export.
- `npm run typecheck`: exit 0.
- `npm test`: exit 0. Covers record uniqueness, official source URLs, local assets, missing slug lookups, contact validation/draft encoding and archive data boundaries. Insights included in integrity checks.

## Browser checks performed

Homepage captured at 1440×900, 1280×800, 1024×768, 768×1024, 390×844 and 360×800. All six measurements showed no horizontal page overflow. Browser screenshots include the platform scrollbar, so captured content widths can be slightly smaller than the requested viewport.

Final desktop/mobile full-page captures visually inspected: `references/final-home-desktop.png`, `references/final-home-mobile.png`. Earlier six-size captures: `references/verified-home-*.png`. Mobile contact form screenshot visually inspected: `references/contact-mobile.png`.

- All ten index pages returned HTTP 200; desktop overflow checks passed.
- All nine service details, all seven news details and all three insight details returned HTTP 200.
- Unknown root, service, news and insight routes returned HTTP 404 with the branded return-home UI.
- Mobile Sheet: opened, Escape dismissed, trigger focus restored; expanded company submenu navigated to the profile and closed the dialog.
- Desktop submenu became visible with keyboard focus on its parent link.
- Capability arrows/dots update selection. Corrected translation for single-card mobile layout; clamped the final desktop position to prevent an empty half-panel. Final desktop last-card edge matched the viewport edge within floating-point rounding.
- Coverage next control scrolled the horizontal track (336.8px observed).
- News archive: six cards initially, one on page two; changing year to 2026 reset pagination and showed three cards.
- Contact: empty submission displayed five invalid fields and focused the name input. Valid values prepared the encoded verified WhatsApp URL. Status explicitly said the message had not been sent. Editing cleared the prepared draft. No WhatsApp network request occurred during draft preparation; the outbound link was deliberately not opened.
- Clean local route passes recorded zero page exceptions. A prior hydration mismatch was caused by the QA script changing image loading attributes before hydration; clean reload did not reproduce it. No suppression added.
- Some rapid-scroll captures measured pending lazy images, not confirmed broken resources. After hydration and explicit image loading, every homepage image completed with nonzero natural dimensions; final desktop/mobile captures contain the images.

## Source retry and corrections

The official Wawasan page initially rendered only heading/footer. A later five-second retry successfully loaded article records. Three detail pages were read, exact titles/dates/photos retained, concise summaries explicitly labelled. Removed the unavailable-content notice. Official source links remain on detail pages and the archive identifies its selection rather than claiming a full mirror.

## Reference comparison and limits

Desktop/mobile homepage reviewed against previously captured RDK reference composition: two-row overlay desktop navigation, low serif hero, breathing gap, pale split introduction, 2×2 service cards, photographic capability section, horizontal logistics tiles, six stacked image/text activities, three editorial cards, photographic closing CTA and dark footer.

This is not a pixel-perfect claim. SPIL's ship/container imagery produces different crops and visual weight. Indonesian headings wrap differently. Group/network/product content necessarily differs from RDK engineering content. Inner pages use the audited banner/split/alternating/editorial families, but exhaustive matched visual comparison of every detail page has not been completed. Tablet captures were collected and overflow measured; not every section was manually reviewed at every tablet size.

The local editorial archive contains three selected official insights, not the source's full 45-page archive. Four news details retain abbreviated source-linked coverage rather than fabricated full reports. No interactive route map, schedules, tracking, bookings, authentication or message delivery is simulated. Group profile actions use the verified official group directory where individual destinations were not established.

Outside-click dismissal was attempted but did not produce a reliable completed assertion; Escape and navigation dismissal are confirmed. No screen-reader audit, cross-browser matrix, Lighthouse performance score or production deployment verification is claimed. Subagent review could not start against this repository's unborn HEAD; no commit was created to bypass it.

No commit, push, deployment or external message submission performed.
