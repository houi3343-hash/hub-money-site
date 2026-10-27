import type {MetadataRoute} from 'next';import {siteUrl} from './site-url';
export default function sitemap():MetadataRoute.Sitemap{const origin=siteUrl();return['','/price','/fee','/guide','/safety','/faq'].map((path,i)=>({url:origin+path,changeFrequency:'monthly' as const,priority:i===0?1:0.75}))}
