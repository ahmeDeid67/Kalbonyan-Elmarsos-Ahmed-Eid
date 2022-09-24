module.exports = {
  siteMetadata: {
    siteUrl: "https://www.justincaovan.com",
    title: "Justin Caovan | Front End Developer",
    description:
      "Justin Caovan is a front end developer who loves creating seamless, intuitive, and beautiful digital experiences.",
    author: "Justin Caovan",
    image: "src/images/home.png",
  },
  plugins: [
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-postcss",
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Justin Caovan Portfolio`,
        short_name: `Portfolio`,
        start_url: `/`,
        icon: `src/images/icons8-portfolio-64.png`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
      },
    },
    `gatsby-plugin-offline`,
  ],
};
