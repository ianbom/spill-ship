export const site = {
 name: 'PT Salam Pacific Indonesia Lines',
 phone: '081-163-3388', tel: 'tel:+62811633388', whatsapp: 'https://wa.me/62811333799',
 app: 'https://www.myspil.com/myspilcom', source: 'https://www.spil.co.id/id',
 overview: 'Salam Pacific Indonesia Lines (SPIL) bergerak di bidang pengiriman petikemas dengan jaringan logistik yang tersebar di seluruh Indonesia. Didukung armada kapal, kontainer, fasilitas operasional, dan sumber daya berkualitas, kami terus berkembang untuk meningkatkan pelayanan dan kepuasan pelanggan.',
 vision: 'Menjadi perusahaan pelayaran terbaik yang menggerakkan perekonomian',
 mission: 'Memberikan solusi transportasi dengan jaringan terluas didukung sumber daya berkualitas untuk kepuasan pelanggan',
 values: ['Integritas', 'Orientasi Pelanggan', 'Kompetitif', 'Kerjasama Tim', 'Visioner'],
};
export const navigation = [
 { title:'Tentang SPIL', href:'/tentang-spil', children:[{title:'Profil Perusahaan',href:'/tentang-spil'},{title:'Grup SPIL',href:'/perusahaan/grup'}]},
 { title:'Layanan',href:'/layanan',children:[{title:'Semua Layanan',href:'/layanan'},{title:'Port to Port',href:'/layanan/port-to-port'},{title:'Door to Door',href:'/layanan/door-to-door'},{title:'mySPIL Reloaded',href:'/myspil'}]},
 {title:'Jaringan',href:'/jaringan'}, {title:'Berita & Aktivitas',href:'/berita'}, {title:'Solusi Logistik',href:'/solusi-logistik'}, {title:'Wawasan',href:'/wawasan'},
];
export const asset=(name:string)=>`/assets/spil/${name}`;
