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
        apiToken: '98b7c7125ef0333e3b58ccfa579fbd',
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
