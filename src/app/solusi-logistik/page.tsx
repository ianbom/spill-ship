import type {Metadata} from 'next';
import Image from 'next/image';
import {asset} from '@/data/site';
import {services} from '@/data/services';
import {InnerHero,ContactCTA,Action} from '@/components/shared/sections';
export const metadata:Metadata={title:'Solusi Logistik'};
export default function Solutions(){return <><InnerHero title="Solusi Logistik" description="Pilihan pengiriman laut, darat, udara, dan pergudangan untuk mendukung rantai pasok bisnis Anda." image="international.webp"/><section className="section"><div className="container">{[services[4],services[6],services[3],services[7],services[2],services[1]].map(s=><div className="alternating-row" key={s.slug}><div className="inner-photo"><Image src={asset(s.image)} alt={s.title} fill sizes="(max-width:767px) 100vw,50vw"/></div><div><h2>{s.title}</h2><p>{s.body}</p><Action href={`/layanan/${s.slug}`}>Kenali Solusi</Action></div></div>)}</div></section><ContactCTA/></>}
