# SPIL × RDK frontend

Indonesian SPIL corporate frontend using the researched RDK visual composition. Next.js App Router, TypeScript, Tailwind, Radix-backed Sheet, local official SPIL assets and typed static data.

## Run

```sh
npm ci
npm run dev
```

Open http://localhost:3000. Production: `npm run build` then `npm start`.

## Verify

```sh
npm run build
npm run lint
npm run typecheck
npm test
```

## Routes

`/`, `/tentang-spil`, `/layanan`, `/layanan/[slug]`, `/solusi-logistik`, `/jaringan`, `/berita`, `/berita/[slug]`, `/wawasan`, `/wawasan/[slug]`, `/perusahaan/grup`, `/myspil`, `/kontak`, branded 404.

Nine services, seven activities, three selected insights. Static records retain official source URLs. Contact form prepares a WhatsApp draft locally; nothing is sent automatically. Product actions open the official mySPIL website. No backend, account system, CMS, database, live shipment tracking or submission service.

## Research and QA

- [RDK visual audit](docs/rdk-visual-audit.md)
- [SPIL content map](docs/spil-content-map.md)
- [Official asset inventory](docs/asset-inventory.md)
- [Visual QA, checks and limitations](docs/visual-qa.md)

Reference reconstruction; not represented as SPIL's deployed official website. Official photographs/logos remain their respective owners' materials. No RDK imagery or engineering content in the frontend.
