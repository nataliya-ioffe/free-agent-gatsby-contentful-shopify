require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    {
      resolve: 'gatsby-source-shopify',
      options: {
        password: process.env.SHOPIFY_ADMIN_API_ACCESS_TOKEN,
        storeUrl: process.env.SHOPIFY_STORE_URL,
      },
    },
    'gatsby-plugin-image',
  ],
};
