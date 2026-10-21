import type {Metadata} from 'next';
import Image from 'next/image';
import {notFound} from 'next/navigation';
import {insights} from '@/data/insights';
import {asset} from '@/data/site';
import {dateLabel} from '@/data/activities';
import {Breadcrumb,ContactCTA,SectionHeading} from '@/components/shared/sections';
import {InsightCard} from '@/components/shared/insight-card';
export function generateStaticParams(){return insights.map(({slug})=>({slug}))}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{const {slug}=await params;return {title:insights.find(i=>i.slug===slug)?.title??'Wawasan'}}
export default async function InsightDetail({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const item=insights.find(i=>i.slug===slug);if(!item)notFound();return <><article className="article-shell section"><div className="container"><Breadcrumb items={[{label:'Beranda',href:'/'},{label:'Wawasan',href:'/wawasan'},{label:item.title}]}/><header className="article-header"><p className="eyebrow">Wawasan Logistik</p><h1>{item.title}</h1><p className="meta text-muted">{dateLabel(item.date)}</p></header><div className="article-feature"><Image src={asset(item.image)} alt={item.title} fill priority sizes="(max-width:767px) 100vw, 1200px"/></div><div className="article-body prose"><p className="eyebrow">Ringkasan artikel resmi SPIL</p>{item.paragraphs.map(p=><p key={p}>{p}</p>)}<a className="text-link" href={item.source}>Baca artikel lengkap di situs resmi SPIL</a></div><section className="article-related"><SectionHeading title="Wawasan Lainnya"/><div className="insights-grid">{insights.filter(i=>i.slug!==slug).map(i=><InsightCard key={i.slug} item={i}/>)}</div></section></div></article><ContactCTA/></>}
