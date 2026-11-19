import type {Metadata,Viewport} from 'next';
import './globals.css';
import {siteUrl} from './site-url';
export const viewport:Viewport={themeColor:'#0b0b0d',width:'device-width',initialScale:1};
export const metadata:Metadata={
 metadataBase:new URL(siteUrl()),
 verification:{google:'UgYRnj1WlbPf5SSMo7jRIuNXxn9JWSbYl7RSyVH0G3o'},
 title:{default:'피망머니상 시세·수수료·이용안내 | 허브머니상',template:'%s | 허브머니상'},
 description:'피망머니상 관련 시세 비교 기준과 수수료 계산 방식, 피망포커 이용 가이드를 허브머니상에서 확인하세요. 게임머니 정보와 거래 시 주의사항, 자주 묻는 질문까지 알기 쉽게 정리했습니다.',
 alternates:{canonical:'/'},
 icons:{icon:[{url:'/favicon.svg',type:'image/svg+xml'}]},
 openGraph:{type:'website',locale:'ko_KR',siteName:'허브머니상',title:'피망머니상 시세·수수료·이용안내 | 허브머니상',description:'피망머니상 관련 시세 비교 기준과 수수료 계산 방식, 피망포커 이용 가이드를 허브머니상에서 확인하세요. 게임머니 정보와 거래 시 주의사항, 자주 묻는 질문까지 알기 쉽게 정리했습니다.',url:'/'},
 robots:{index:true,follow:true}
};
const organizationSchema={'@context':'https://schema.org','@type':'Organization',name:'허브머니상',url:siteUrl(),logo:siteUrl()+'/images/logo.png'};
const websiteSchema={'@context':'https://schema.org','@type':'WebSite',name:'허브머니상',url:siteUrl(),inLanguage:'ko-KR',description:'피망머니상 시세 비교 기준과 수수료 구조, 게임 이용 및 사칭 예방 정보를 안내하는 독립 정보 사이트'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="ko"><body><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify([websiteSchema,organizationSchema]).replace(/</g,'\\u003c')}}/><a className="skip-link" href="#content">본문으로 바로가기</a>{children}<nav className="info-dock" aria-label="모바일 빠른 정보 메뉴"><a href="/guide" className="info-dock-guide"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 7v14M3 4h4a5 5 0 0 1 5 5 5 5 0 0 1 5-5h4v15h-4a5 5 0 0 0-5 2 5 5 0 0 0-5-2H3z"/></svg><span>이용 가이드</span></a><a href="/safety" className="info-dock-safety"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3l8 3v6c0 5-4 8-8 10-4-2-8-5-8-10V6z"/><path d="m8 12 3 3 5-6"/></svg><span>안전 정보</span></a></nav></body></html>}
