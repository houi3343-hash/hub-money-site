/** Production canonical origin. Override via NEXT_PUBLIC_SITE_URL if the domain changes. */
export function siteUrl(){const explicit=process.env.NEXT_PUBLIC_SITE_URL?.trim();if(explicit)return explicit.replace(/\/$/,'');return 'https://www.pmangme.com';}
