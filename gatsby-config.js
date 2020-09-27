require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    { resolve: `gatsby-plugin-build-date`, options: { formatAsDateString: false }},
    { resolve: `gatsby-source-filesystem`, options: { path: `./src/data/` } },
    { resolve: 'gatsby-source-firestore',
      options: {
        credential: JSON.parse(JSON.stringify({
          type: "service_account",
          project_id: process.env.GATSBY_PROJECT_ID,
          private_key_id: process.env.GATSBY_FIREBASE_PRIVATE_KEY_ID,
          private_key: process.env.GATSBY_FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
          client_email: process.env.GATSBY_FIREBASE_CLIENT_EMAIL,
          client_id: process.env.GATSBY_FIREBASE_CLIENT_ID,
          auth_uri: "https://accounts.google.com/o/oauth2/auth",
          token_uri: "https://oauth2.googleapis.com/token",
          auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
          client_x509_cert_url: process.env.GATSBY_FIREBASE_CLIENT_x509_CERT_URL
        })),
        types: [
          {
            type: 'Location',
            collection: 'locations',
            map: doc => ({
              name: doc.name,
              lat: doc.lat,
              long: doc.long
            }),
          }
        ],
      },
    }
  ],
}