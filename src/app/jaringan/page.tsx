import type {Metadata} from 'next';
import Image from 'next/image';
import {asset} from '@/data/site';
import {capabilities} from '@/data/services';
import {InnerHero,ContactCTA,Action} from '@/components/shared/sections';
export const metadata:Metadata={title:'Jaringan & Kapabilitas'};
export default function Network(){return <><InnerHero title="Jaringan Kami" description="Jaringan logistik di seluruh Indonesia, didukung armada dan layanan multimoda yang saling terhubung." image="port-to-port.webp"/><section className="section"><div className="container">{capabilities.map((c,i)=><div className="alternating-row" key={c.title}><div className="inner-photo"><Image src={asset(c.image)} alt={c.title} fill sizes="(max-width:767px) 100vw, 50vw"/></div><div><div className="row-number">{String(i+1).padStart(2,'0')}</div><h2>{c.title}</h2><p>{c.description}</p>{i===1&&<p>Halaman utama resmi SPIL mencantumkan 39+ pelabuhan dan 57+ rute. Informasi operasional dan ketersediaan pengiriman perlu dikonfirmasi melalui kanal resmi.</p>}<Action href={i===3?'/myspil':'/kontak'}>{i===3?'Kenali mySPIL':'Konsultasikan Pengiriman'}</Action></div></div>)}</div></section><ContactCTA/></>}
