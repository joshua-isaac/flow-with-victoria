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
    {
      resolve: `gatsby-plugin-snipcart-advanced`,
      options: {
        version: "3.1.1",
        publicApiKey: process.env.GATSBY_SNIPCART_API_KEY, // use public api key here or in environment variable
        defaultLang: "en",
        currency: "cad",
        openCartOnAdd: true,
        useSideCart: true,
        // be careful with this mode cart. The cart in this mode has a bug of scroll in firefox
        locales: {
          en: {
            actions: {
              checkout: "Checkout",
            },
          },
        },
        templatesUrl:
          "path on your template file. Set file in the static folder, ex: '/snipcart/index.html'",
        // not work on dev. Gatsby not serve html file in dev https://github.com/gatsbyjs/gatsby/issues/13072
        innerHTML: `
            <billing section="bottom">
                <!-- Customization goes here -->
            </billing>`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
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
