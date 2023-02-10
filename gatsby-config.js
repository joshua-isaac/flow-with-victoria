require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

//configure your agility plugin with environment variables so that
//your agility api credentials stay secure
const agilityConfig = {
  guid: process.env.AGILITY_GUID,
  apiKey: process.env.AGILITY_API_KEY,
  isPreview: process.env.AGILITY_API_ISPREVIEW === "true",
}

module.exports = {
  siteMetadata: {
    title: "Flow With Victoria",
  },
  plugins: [
    `gatsby-plugin-netlify`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Montserrat:400,700"],
        },
      },
    },
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint:
          "https://flowwithvictoria.us21.list-manage.com/subscribe/post?u=3fa04e96aa56b2202ddbe7b33&amp;id=d4673ee82b&amp;f_id=0024eae1f0", // string; add your MC list endpoint here; see instructions below
        timeout: 3500, // number; the amount of time, in milliseconds, that you want to allow mailchimp to respond to your request before timing out. defaults to 3500
      },
    },
    {
      //the name of the plugin
      resolve: "@agility/gatsby-source-agilitycms",
      //the options for our plugin
      options: {
        //your Agility Content Fetch API Guid
        guid: agilityConfig.guid,
        //your Agility Content Fetch API Key
        apiKey: agilityConfig.apiKey,
        //set this to true if you are using the preview API Key
        isPreview: agilityConfig.isPreview,
        //set this to true to see expanded traces in the build logs
        debug: false,
        //the languages you want to source content for
        languages: [
          {
            // The name of the language code
            name: "English",
            // The actual language code set in Agility CMS
            code: "en-us",
            // The name to be used in the URL path that represents the current language
            path: "en",
          },
        ],
        // The channels you want to include
        channels: [
          {
            // The reference name for the website channel as it is defined in Agility CMS
            referenceName: "website",
          },
        ],
        //the page template that will be used to render Agility CMS pages
        masterPageTemplate: "./src/AgilityPage.js",
      },
    },
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: { name: `images`, path: `./src/img/` },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Flow With Victoria`,
        short_name: `Flow With Victoria`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `minimal-ui`,
        icon: `src/img/flower.svg`,
      },
    },
    `gatsby-plugin-offline`,
  ],
}
