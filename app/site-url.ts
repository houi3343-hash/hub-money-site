/** Canonical origin. Override with NEXT_PUBLIC_SITE_URL after connecting a custom domain. */
export function siteUrl(){const explicit=process.env.NEXT_PUBLIC_SITE_URL?.trim();if(explicit)return explicit.replace(/\/$/,'');return 'https://hub-money-site.vercel.app';}
