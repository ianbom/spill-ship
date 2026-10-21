# RDK rendered reference audit

Inspected 21 October 2026 through Playwright: `/`, `/about/`, `/services/`, `/services/engineering-2/`, `/our-equipment/`, `/market/`, `/project/`, `/article/`, `/contact/`. Home full-page screenshots at 1440×900, 1024×900, 390×900; desktop inner-page full screenshots captured. Captures initially stored in the session plan directory. Measurements below from rendered computed styles; section heights approximate. No pixel-perfect claim.

## System
1200px container at desktop (x≈112 at effective1425px content viewport),24px tablet gutters,16px mobile. Headings Libre Baskerville regular64/89.6 hero,40/52 section,28/36.4 cards. Body Poppins16/26.4, some Manrope sector labels. Mobile32/44.8 hero,24/31.2 section,14/23.1 body. White and #f4f4f4 alternate. Original blue actions/dark navy are replaced by SPIL red/neutral charcoal; not copied as brand colors.

## Header and hero
Desktop utility row: logo left, email/phone/language/contact right; lower row six widely spaced navigation entries separated by subtle upper rules. Overlay header white-on-image; fixed white alternate header exists on scroll. Inner service detail uses white header above pale split hero. Home hero approximately900px tall with image covering viewport, dark overlay, bottom-aligned left heading about865px wide; CTA beside supporting copy to right. Desktop heading starts around y586. Mobile compact white header/menu, full-height photographic hero; text stacks near bottom. Pill CTA about48px high, circular arrow right. Header must remain keyboard-accessible rather than copy any inaccessible reference behavior.

## Home sequence
1. Hero, then white breathing space (roughly120px).
2. Pale about section: left text half, right photographic half, generous120px vertical padding; heading about590px wide.
3. Services white: centered624px heading; 2×2 photographic panels,24px gaps, approximately590×450px, small radius4px; bottom white serif title/body over gradient. Mobile single column.
4. Equipment dark full-width photographic/gradient field: centered heading, broad whitespace before translucent rectangular carousel cards; two visible large cards, side circular controls and bottom progress treatment. Mobile one visible card. Approx1000px desktop total.
5. Industry pale: left heading/right description, horizontal sector image tiles with bold sans-serif labels. Horizontal carousel, not a full multi-row generic icon grid.
6. Project white: heading left, pill view-all right. Six stacked horizontal cards, image aboutone-third and dark text panel two-thirds; metadata small above serif title; read-more at bottom. Mobile image above text, all six remain present.
7. Editorial: heading/view-all then three pale cards; outlined category chip, title, read-more, divider, large day and small month/year at bottom. Mobile single-column.
8. CTA: roughly650px photographic band, text left, person/image right, 51/66.3 heading; muted light pill. Mobile crop with text above photo space.
9. Dark footer: logo/description/social left; navigation row over contact/services/certification columns right; fine divider and centered copyright. SPIL replaces certification column with verified group links. Mobile stacks columns.

No client/proof strip observed on home. Do not add a new section out of order. Initial screenshots showed grey image fields caused by lazy loading; subsequent scrolling loads photos (service detail verified). These are not intentional placeholders.

## Inner templates
About: photographic≈760px banner with low heading/description, split overview, vision/mission/value columns, numbered strengths, certification and client slots (use only applicable verified SPIL content).
Services index: shared banner, centered intro, service image/card grid. Service detail: no giant image banner; pale two-column photo and text beneath white header, then white split heading/body sections separated by fine rules.
Equipment: shared banner and numbered alternating image/text capability rows.
Market: banner and alternating sector photo/copy rows.
Projects: banner, centered introduction, stacked project cards and numbered pagination.
Article: banner, category selector and image/editorial listing. Detail layout still requires closer inspection; use restrained source-backed editorial composition, document deviation.
Contact: banner, two-column contact information/form, alternative contact blocks, compact copyright ending.

## Motion and remaining limits
Observed carousel controls, hoverable service links, menu variants and fixed header markup. Exact animation durations and mobile menu focus behavior were not measured; implement quiet150–250ms transitions with reduced-motion support. All reference pages opened; not every inner page has been visually checked at every breakpoint. Match actual geometry, not broken source loading or inaccessible behavior.
