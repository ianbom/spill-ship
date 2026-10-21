import type {Metadata} from 'next';
import {InnerHero,SectionHeading,ContactCTA} from '@/components/shared/sections';
import {InsightCard} from '@/components/shared/insight-card';
import {insights} from '@/data/insights';
export const metadata:Metadata={title:'Wawasan Logistik & Maritim'};
export default function Insights(){return <><InnerHero title="Wawasan" description="Informasi dan wawasan seputar logistik, pengiriman, dan maritim melalui kanal resmi SPIL." image="sea-freight.webp"/><section className="section"><div className="container"><SectionHeading eyebrow="Wawasan Logistik & Maritim" title="Dapatkan Wawasan Baru"/><div className="insights-grid">{insights.map(item=><InsightCard key={item.slug} item={item}/>)}</div><p className="text-muted mt-12">Pilihan artikel dari kanal resmi SPIL. <a className="text-link" href="https://www.spil.co.id/id/wawasan">Lihat seluruh wawasan</a>.</p></div></section><ContactCTA/></>}
