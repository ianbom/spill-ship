import Image from 'next/image';
import {asset,site} from '@/data/site';
import {services} from '@/data/services';
import {activities} from '@/data/activities';
import {insights} from '@/data/insights';
import {InsightCard} from '@/components/shared/insight-card';
import {Action,SectionHeading,ServiceCard,ActivityCard,ContactCTA} from '@/components/shared/sections';
import {CapabilityShowcase,CoverageShowcase} from '@/components/home/showcases';
export default function Home(){return <>
 <section className="home-hero"><Image src={asset('hero-ship.webp')} alt="Kapal petikemas SPIL berlayar menghubungkan kepulauan Indonesia" fill priority sizes="100vw"/><div className="hero-overlay"/><div className="container home-hero-content"><h1>Menggerakkan<br/>Perekonomian Nasional</h1><div className="hero-bottom"><p>SPIL menghubungkan pulau-pulau Indonesia melalui solusi pengiriman kontainer dan logistik terintegrasi.</p><Action href="/layanan" light>Jelajahi Layanan</Action></div></div></section>
 <div className="hero-breathing-space"/>
 <section className="about-preview section"><div className="container split"><div><SectionHeading eyebrow="Tentang Kami" title="SPIL Connecting Islands"/><p>{site.overview}</p><Action href="/tentang-spil">Kenali SPIL</Action></div><div className="about-image"><Image src={asset('about-spil.webp')} alt="Kontainer SPIL yang mendukung pengiriman ke seluruh Indonesia" fill sizes="(max-width:767px) 100vw, 50vw"/></div></div></section>
 <section className="section services-preview"><div className="container"><SectionHeading eyebrow="Layanan" title="Solusi Logistik Terintegrasi untuk Bisnis Anda" description="Beragam pilihan pengiriman untuk menghubungkan bisnis Anda dengan seluruh Nusantara." center/><div className="services-grid">{services.slice(0,4).map(s=><ServiceCard key={s.slug} service={s}/>)}</div></div></section>
 <CapabilityShowcase/><CoverageShowcase/>
 <section className="section activity-preview"><div className="container"><div className="heading-row"><SectionHeading eyebrow="Berita & Aktivitas" title="Langkah Nyata, Dampak Bersama"/><Action href="/berita">Semua Aktivitas</Action></div><div className="activities-list">{activities.slice(0,6).map(item=><ActivityCard item={item} key={item.slug}/>)}</div></div></section>
 <section className="section insights-preview"><div className="container"><div className="heading-row"><SectionHeading eyebrow="Wawasan" title="Wawasan Logistik & Maritim"/><Action href="/wawasan">Lihat Wawasan</Action></div><div className="insights-grid">{insights.map(item=><InsightCard item={item} key={item.slug}/>)}</div></div></section>
 <ContactCTA/>
 </>}
