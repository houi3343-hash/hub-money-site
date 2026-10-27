import type {Metadata,Viewport} from 'next';
import './globals.css';
import {siteUrl} from './site-url';
export const viewport:Viewport={themeColor:'#0b0b0d',width:'device-width',initialScale:1};
export const metadata:Metadata={
 metadataBase:new URL(siteUrl()),
 title:{default:'피망머니상 시세·수수료·이용안내 | 허브머니상',template:'%s | 허브머니상'},
 description:'피망머니상 관련 시세 비교 기준과 수수료 계산 방식, 피망포커 이용 가이드를 허브머니상에서 확인하세요. 게임머니 정보와 거래 시 주의사항, 자주 묻는 질문까지 알기 쉽게 정리했습니다.',
 alternates:{canonical:'/'},
 icons:{icon:[{url:'/favicon.svg',type:'image/svg+xml'}]},
 openGraph:{type:'website',locale:'ko_KR',siteName:'허브머니상',title:'피망머니상 시세·수수료·이용안내 | 허브머니상',description:'피망머니상 관련 시세 비교 기준과 수수료 계산 방식, 피망포커 이용 가이드를 허브머니상에서 확인하세요. 게임머니 정보와 거래 시 주의사항, 자주 묻는 질문까지 알기 쉽게 정리했습니다.',url:'/'},
 robots:{index:true,follow:true}
};
const organizationSchema={'@context':'https://schema.org','@type':'Organization',name:'허브머니상',url:siteUrl(),logo:siteUrl()+'/images/logo.png'};
const websiteSchema={'@context':'https://schema.org','@type':'WebSite',name:'허브머니상',url:siteUrl(),inLanguage:'ko-KR',description:'피망머니상 시세 비교 기준과 수수료 구조, 게임 이용 및 사칭 예방 정보를 안내하는 독립 정보 사이트'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="ko"><body><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify([websiteSchema,organizationSchema]).replace(/</g,'\\u003c')}}/><a className="skip-link" href="#content">본문으로 바로가기</a>{children}</body></html>}
