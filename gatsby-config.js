module.exports = {
  pathPrefix: "/portfolio-2022",
  siteMetadata: {
    title: `Anna Ozola`,
    description: `Anna Ozola Portfolio`,
    author: `Anna Ozola`,
    copyright: "Copyright 2024 Anna Ozola",
    siteUrl: `https://www.annaozola.com`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-LZJZC6ZZLD", // Google Analytics / GA
        ],
        gtagConfig: {
          optimize_id: "OPT_CONTIANER_ID",
          anonymize_ip: true,
          cookie_expires: 0,
        },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
          // Setting this parameter is also optional
          respectDNT: true,
          // Avoids sending pageview hits from custom paths
          exclude: ["/preview/**", "/do-not-track/me/too/"],
          // Defaults to https://www.googletagmanager.com
          // origin: "YOUR_SELF_HOSTED_ORIGIN",
          // Delays processing pageview events on route update (in milliseconds)
          // delayOnRouteUpdate: 0,
        },
      },
    },
    {
      resolve: `gatsby-plugin-gdpr-cookies`,
      options: {
        googleAnalytics: {
          trackingId: "G-LZJZC6ZZLD", // leave empty if you want to disable the tracker
          cookieName: "gatsby-gdpr-google-analytics", // default
          anonymize: true, // default
        },
        environments: ["production", "development"],
      },
    },
    `gatsby-plugin-netlify`,
    `gatsby-plugin-webpack-bundle-analyser-v2`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        quality: 100,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/projects`,
      },
    },
    `gatsby-plugin-mdx`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-catch-links`,
    {
      resolve: `gatsby-remark-copy-linked-files`,
      options: {},
    },

    `gatsby-remark-images`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              quality: 100,
              maxWidth: 1200,
              path: `${__dirname}/src/images`,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        plugins: [`gatsby-remark-images`],
        extensions: [`.mdx`, `.md`, `.markdown`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              quality: 100,
              maxWidth: 4096,
              path: `${__dirname}/src/images`,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
