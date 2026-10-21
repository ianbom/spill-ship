import type {Metadata} from 'next';
import {Libre_Baskerville,Poppins} from 'next/font/google';
import {SiteHeader} from '@/components/layout/site-header';
import {SiteFooter} from '@/components/shared/sections';
import './globals.css';
const serif=Libre_Baskerville({subsets:['latin'],weight:['400','700'],variable:'--font-serif',display:'swap'});
const sans=Poppins({subsets:['latin'],weight:['400','500','600'],variable:'--font-sans',display:'swap'});
export const metadata:Metadata={title:{default:'SPIL — Connecting Islands',template:'%s | SPIL'},description:'SPIL menghubungkan pulau-pulau Indonesia melalui pengiriman petikemas dan solusi logistik terintegrasi.',icons:{icon:'/assets/spil/logo-spil.svg'}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="id"><body className={`${serif.variable} ${sans.variable}`}><a href="#main" className="skip-link">Lewati ke konten</a><SiteHeader/><main id="main">{children}</main><SiteFooter/></body></html>}
