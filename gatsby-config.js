require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: "JetClean",
    description: 'Soft washing and pressue washing in Charlotte, NC.'
  },
  plugins: [
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: process.env.DATO_CMS_ACCESS_TOKEN,
        preview: false,
        disableLiveReload: false,
      },
    },
    "gatsby-plugin-gatsby-cloud",
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: `Montserrat`,
              variants: [`300`, `400`,`500`, `600`, `700`]
            },
            {
              family: `Open Sans`,
              variants: [`300`, `400`, `500`, `700`]
            },
            {
              family: `Work Sans`,
              variants: [`300`, `400`, `500`, `700`]
            }
          ]
        }
      }
    }
  ],
}
