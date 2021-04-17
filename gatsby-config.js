require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})


module.exports = {
  siteMetadata: {
    title: `Gatsby Blog Site`,
    description: `Project 12A`,
    author: `@Muhammad Owais`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },

    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `lzv56pd93ve9`,
        accessToken:`v21SSjyU6kVDHF1nbeBvjuWMXTJIBQ68Pe5OU_aW46g`,
        forceFullSync: true,
      },
    },
    
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },

      
    },

    {
      resolve: "gatsby-plugin-firebase",
      options: {
        credentials: {
          apiKey: `AIzaSyD-3y2K7hgHs74ewp-k7MxchCoTUMw7bCo`,
          authDomain: `auth-demo-f9904.firebaseapp.com`,
          projectId: `auth-demo-f9904`,
          storageBucket: `auth-demo-f9904.appspot.com`,
          messagingSenderId: `990919786702`,
          appId: `1:990919786702:web:64fe2ecbd8b32f4095d09f`
        }
      }
    }


  ],
}
