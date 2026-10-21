import type {Metadata} from 'next';
import {InnerHero,SectionHeading,ContactCTA} from '@/components/shared/sections';
import {NewsArchive} from '@/components/shared/news-archive';
export const metadata:Metadata={title:'Berita & Aktivitas'};
export default function News(){return <><InnerHero title="Berita & Aktivitas" description="Ikuti langkah SPIL dalam menghubungkan Indonesia dan memberikan dampak bagi lingkungan serta masyarakat." image="port-to-port.webp"/><section className="section" id="archive" style={{scrollMarginTop:170}}><div className="container"><SectionHeading title="Langkah Nyata, Dampak Bersama" description="Berita dan kegiatan dari PT Salam Pacific Indonesia Lines." center/><NewsArchive/></div></section><ContactCTA/></>}
