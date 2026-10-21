import type {Metadata} from 'next';
import Image from 'next/image';
import {group} from '@/data/group';
import {asset} from '@/data/site';
import {InnerHero,SectionHeading,ContactCTA} from '@/components/shared/sections';
export const metadata:Metadata={title:'Grup SPIL'};
export default function Group(){return <><InnerHero title="Grup SPIL" description="Terus berkembang untuk memenuhi kebutuhan logistik Anda melalui ekosistem perusahaan yang saling terhubung." image="port-to-port.webp"/><section className="section"><div className="container"><SectionHeading eyebrow="Ekosistem SPIL" title="Bertumbuh Bersama, Terhubung Lebih Jauh" description="Dari pelayaran dan terminal hingga pergudangan dan inovasi digital." center/><div className="group-grid">{group.map(g=><article className="group-card" key={g.name}>{g.logo&&<div className="group-logo"><Image src={asset(g.logo)} alt={`Logo ${g.name}`} fill sizes="300px"/></div>}<h3>{g.name}</h3><p className="eyebrow">{g.type}</p><p>{g.description}</p><a href="https://www.spil.co.id/id/perusahaan/grup" className="text-link">Profil di situs resmi</a></article>)}</div><p className="mt-10 text-sm text-neutral-500">SPIL University juga tercantum dalam ekosistem Grup SPIL. Informasi lebih lanjut tersedia melalui halaman grup resmi.</p></div></section><ContactCTA/></>}
