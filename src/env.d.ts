/// <reference types="astro/client" />
/// <reference types="@cloudflare/workers-types" />

interface ImportMetaEnv {
    readonly PUBLIC_SHOPIFY_SHOP: string;
    readonly PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN: string;
    readonly PRIVATE_SHOPIFY_STOREFRONT_ACCESS_TOKEN?: string;
}