import type {Metadata,Viewport} from 'next';
import './globals.css';
import {siteUrl} from './site-url';
export const viewport:Viewport={themeColor:'#0b0b0d',width:'device-width',initialScale:1};
export const metadata:Metadata={
 metadataBase:new URL(siteUrl()),
 title:{default:'허브머니상 | 피망머니상 시세와 수수료 정보',template:'%s | 허브머니상'},
 description:'피망머니상 시세 확인 방법, 수수료 계산 기준, 피망포커 이용 안내와 사칭 주의사항을 허브머니상에서 살펴보세요.',
 alternates:{canonical:'/'},
 icons:{icon:[{url:'/favicon.svg',type:'image/svg+xml'}]},
 openGraph:{type:'website',locale:'ko_KR',siteName:'허브머니상',title:'허브머니상 | 피망머니상 시세와 수수료 정보',description:'피망머니상 시세 비교 기준부터 수수료 계산 방식, 게임 이용과 사칭 예방 정보까지.',url:'/'},
 robots:{index:true,follow:true}
};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="ko"><body><a className="skip-link" href="#content">본문으로 바로가기</a>{children}</body></html>}
