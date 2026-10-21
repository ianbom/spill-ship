import fs from 'node:fs/promises';
import path from 'node:path';
const base='https://www.spil.co.id';
const assets={
'logo-spil.svg':'/_nuxt/spil_logo.D7V7T_YV.svg',
'hero-ship.webp':'/_nuxt/Data%20Background.BPJsJYU0.webp',
'about-port.webp':'/_nuxt/About%20Us.CUVlfm5L.webp',
'about-spil.webp':'/_nuxt/About%20SPIL%20connecting.BQtLVcIz.webp',
'port-to-port.webp':'/_nuxt/Port%20to%20Port.CxJea_Kw.webp',
'door-to-door.webp':'/_nuxt/Door%20to%20Door.BMftLZE2.webp',
'sea-freight.webp':'/_nuxt/Sea%20Freight.CAgv3pJz.webp',
'air-freight.webp':'/_nuxt/Air%20Freight.B2QMOaJd.webp',
'land-transport.webp':'/_nuxt/Land%20Transport.N8uARwqH.webp',
'international.webp':'/_nuxt/International%20Freight%20Forwarder.C72cRlAa.webp',
'warehouse.webp':'/_nuxt/Warehouse.DYaJLxQC.webp',
'contact-port.webp':'/_nuxt/homeCTA.DahqdRcz.webp',
'myspil.webp':'/_nuxt/Mockup%20mySPIL.BhvbZqve.webp',
'group-tpil.svg':'/_nuxt/Logo_TPIL.DVwZ5ZtY.svg',
'group-manalagi.svg':'/_nuxt/Logo_Manalagi.D90Pbs0g.svg',
'group-roro.webp':'/_nuxt/Logo_Roro.CXQs70vA.webp',
'group-ventures.svg':'/_nuxt/Logo_SPIL%20Ventures.ClU0S5o_.svg',
'group-npti.svg':'/_nuxt/Logo_Nilam%20PTI.DX0oFm_0.svg',
'group-adipurusa.svg':'/_nuxt/Logo_NPH%20Adipurusa.CqRWIkwh.svg',
};
const news=['hari-maritim-internasional-pt-spil-pt-dpl-bangun-kesadaran-keberlanjutan-generasi-muda-maritim','spil-salurkan-bantuan-masker-untuk-masyarakat-terdampak-kebakaran-kalimantan','pt-spil-dukung-pelestarian-ekosistem-laut-melalui-penanaman-lamun','ptspil-kirimkan-bantuan-untuk-sumatra','hari-tanam-pohon-nasional','ideafest-universitas-ciputra-spil-2025','daur-ulang-kertas'];
for(const [i,slug] of news.entries())assets[`news-${i+1}.webp`]=`/Files/SPILCOIDNEW/Article/${slug}.webp`;
const rows=[];
for(const [filename,url] of Object.entries(assets)){
 const stage=await fs.mkdtemp(path.join(process.env.TEMP||'/tmp','spil-asset-'));
 try{const r=await fetch(base+url);if(!r.ok)throw Error(String(r.status));const bytes=Buffer.from(await r.arrayBuffer());await fs.writeFile(path.join(stage,filename),bytes);await fs.copyFile(path.join(stage,filename),'public/assets/spil/'+filename);rows.push(`| ${filename} | ${base+url} | ${filename.startsWith('news')?'News / activity':filename.startsWith('group')?'Group / proof':'Corporate / services'} | Original retrieved (${bytes.length} bytes) |`);}catch(e){rows.push(`| ${filename} | ${base+url} | Pending | MISSING: ${e.message} |`);}
}
await fs.writeFile('docs/asset-inventory.md','# Official SPIL asset inventory\n\nCollected from the publicly accessible official SPIL website. No RDK images used. Corporate images may be reused across relevant sections; no unrelated stock substitutes.\n\n| Local filename | Source URL | Usage | Status |\n|---|---|---|---|\n'+rows.join('\n')+'\n');
console.log(rows.join('\n'));
