import type {Metadata} from 'next';
import {services} from '@/data/services';
import {InnerHero,SectionHeading,ServiceCard,ContactCTA} from '@/components/shared/sections';
export const metadata:Metadata={title:'Layanan'};
export default function Services(){return <><InnerHero title="Layanan" description="Solusi pengiriman petikemas dan logistik terintegrasi untuk beragam kebutuhan bisnis Anda." image="sea-freight.webp"/><section className="section"><div className="container"><SectionHeading title="Satu Mitra untuk Kebutuhan Logistik Anda" description="Dari pelabuhan ke pelabuhan, dari pintu ke pintu. Temukan layanan yang sesuai dengan kebutuhan pengiriman Anda." center/><div className="services-grid">{services.map(s=><ServiceCard service={s} key={s.slug}/>)}</div></div></section><ContactCTA/></>}
