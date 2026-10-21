export type Activity={slug:string;title:string;date:string;location:string;image:string;paragraphs:string[];source:string};
const entries = [
 ['hari-maritim-internasional-pt-spil-pt-dpl-bangun-kesadaran-keberlanjutan-generasi-muda-maritim','Hari Maritim Internasional, PT SPIL dan PT DPL Bangun Kesadaran Keberlanjutan Generasi Muda Maritim','2026-09-28','Lamongan, Jawa Timur',[
 'Dalam rangka memperingati Hari Maritim Internasional 2026, PT Salam Pacific Indonesia Lines bersama PT DPL menyelenggarakan kegiatan edukasi Environmental, Social, and Governance (ESG) di SMKN Maritim Lamongan, Jawa Timur, pada 18 September 2026.',
 'Rangkaian kegiatan diawali dengan pemaparan materi ESG oleh Dr. Andri, Head of ESG PT SPIL. Materi mencakup pengertian dan perkembangan sustainability dan ESG, pengenalan 17 Sustainable Development Goals (SDGs), serta penerapan prinsip ESG dalam kegiatan operasional PT SPIL.',
 'Sesi dilanjutkan dengan kuis interaktif. PT DPL turut berbagi studi kasus mengenai pemanfaatan Pembangkit Listrik Tenaga Surya, prinsip Zero Accident, serta penerapan standar dan sertifikasi ISO.',
 'Kolaborasi ini mendukung pengembangan pendidikan vokasi maritim di Jawa Timur sekaligus menumbuhkan kesadaran generasi muda terhadap pentingnya keberlanjutan.'
 ]],
 ['spil-salurkan-bantuan-masker-untuk-masyarakat-terdampak-kebakaran-kalimantan','SPIL Salurkan Bantuan Masker bagi Masyarakat Terdampak Kebakaran di Kalimantan','2026-09-25','Banjarmasin & Tarakan',[
 'Kebakaran hutan dan lahan di sejumlah wilayah Kalimantan berdampak pada kualitas udara dan meningkatkan paparan asap bagi masyarakat. Melalui semangat WECARE, SPIL menyalurkan bantuan masker melalui BPBD di Banjarmasin dan Tarakan.',
 'Bantuan terdiri dari 220 box masker dewasa dan 150 box masker anak. Sebanyak 110 box masker dewasa dan 75 box masker anak diterima BPBD Banjarmasin pada 15 September 2026. Bantuan dengan jumlah yang sama diserahkan melalui Cabang SPIL Tarakan pada 17 September 2026.',
 'SPIL berharap bantuan ini mendukung perlindungan kesehatan masyarakat dan meringankan dampak kebakaran hutan dan lahan. SPIL Peduli, SPIL Berbagi.'
 ]],
 ['pt-spil-dukung-pelestarian-ekosistem-laut-melalui-penanaman-lamun','PT SPIL Dukung Pelestarian Ekosistem Laut melalui Penanaman Lamun Bersama Greeners Jakarta','2026-06-11','Pulau Pari, Kepulauan Seribu',[
 'PT SPIL berkolaborasi dengan Seagrass Indonesia dan DKI Jakarta Greeners dalam kegiatan penanaman lamun di Pulau Pari, Kepulauan Seribu. Kegiatan dilaksanakan pada 6 Juni 2026 dalam rangka memperingati World Ocean Day.',
 'Lamun berperan dalam menyerap dan menyimpan karbon biru, menjaga kualitas perairan, mengurangi risiko abrasi pantai, serta menjadi habitat dan area pembiakan berbagai biota laut.',
 'Kegiatan diawali dengan briefing mengenai ekosistem lamun dan tata cara penanaman. Peserta kemudian menanam lamun secara langsung dengan pendampingan fasilitator Seagrass Indonesia.',
 'Keterlibatan ini menjadi bagian dari upaya perusahaan mendorong budaya peduli lingkungan serta mendukung pelestarian ekosistem laut dan pesisir.'
 ]],
 ['ptspil-kirimkan-bantuan-untuk-sumatra','PT SPIL dan BPBD Jatim Kirimkan Bantuan untuk Korban Bencana di Sumatera','2025-12-11','Sumatera',[]],
 ['hari-tanam-pohon-nasional','PT SPIL dan PT DPL Tanam Bibit Pohon Srikaya Peringati Hari Menanam Pohon Nasional','2025-12-11','Indonesia',[]],
 ['ideafest-universitas-ciputra-spil-2025','IDEAFEST 2025, SPIL X Universitas Ciputra: Dari Ide Menjadi Dampak Nyata untuk Continuous Improvement (CI)','2025-10-01','Indonesia',[]],
 ['daur-ulang-kertas','PT SPIL Daur Ulang 3,5 Ton Sampah Kertas dari Kantor Cabang Jakarta','2025-07-24','Jakarta',[]],
] as const;
export const activities:Activity[]=entries.map(([slug,title,date,location,paragraphs],i)=>({slug,title,date,location,paragraphs:[...paragraphs],image:`news-${i+1}.webp`,source:`https://www.spil.co.id/id/berita/${slug}`}));
export const dateLabel=(date:string)=>new Intl.DateTimeFormat('id-ID',{day:'numeric',month:'long',year:'numeric',timeZone:'UTC'}).format(new Date(date));
