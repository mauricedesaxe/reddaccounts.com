import { configSchema } from "./schemas";

const defineConfig = {
  shopifyShop: import.meta.env.PUBLIC_SHOPIFY_SHOP,
  publicShopifyAccessToken: import.meta.env.PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN,
  privateShopifyAccessToken: import.meta.env.PRIVATE_SHOPIFY_STOREFRONT_ACCESS_TOKEN || "nothing",
  apiVersion: "2023-01",
};

export const config = configSchema.parse(defineConfig);

// Add function to update config with runtime env values
export const updateConfigWithRuntimeEnv = (env) => {
  if (env && env.PRIVATE_SHOPIFY_STOREFRONT_ACCESS_TOKEN) {
    config.privateShopifyAccessToken = env.PRIVATE_SHOPIFY_STOREFRONT_ACCESS_TOKEN;
  }
};