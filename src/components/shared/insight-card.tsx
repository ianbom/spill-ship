import Image from 'next/image';
import Link from 'next/link';
import {asset} from '@/data/site';
import {dateLabel} from '@/data/activities';
import type {Insight} from '@/data/insights';
export function InsightCard({item}:{item:Insight}){return <Link href={`/wawasan/${item.slug}`} className="insight-card"><div className="insight-image"><Image src={asset(item.image)} alt="" fill sizes="(max-width:767px) 100vw, 400px"/></div><p className="eyebrow">{dateLabel(item.date)}</p><h3>{item.title}</h3><span className="text-link">Baca Selengkapnya</span></Link>}
