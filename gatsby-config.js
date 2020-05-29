module.exports = {
  siteMetadata: {
    title: `Justice for George Floyd`,
    description: `Links to support the efforts in Minnesota to seek justice for the murder of George Floyd by the police.`,
    author: `@jp_marra`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-preload-fonts`,
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        custom: {
          families: ["Geogrotesque Regular", "Geogrotesque Medium"],
          urls: ["fonts.css"],
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Justice for George Floyd`,
        short_name: `Justice for George Floyd`,
        start_url: `/`,
        background_color: `#121212`,
        theme_color: `#F743B6`,
        display: `minimal-ui`,
        icon: `src/images/jp-favicon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
