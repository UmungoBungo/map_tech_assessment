require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    { resolve: `gatsby-source-filesystem`, options: { path: `./src/data/` } },
    {
      resolve: 'gatsby-source-firestore',
      options: {
        credential: require("./firebase.json"),
        types: [
          {
            type: 'Idea',
            collection: 'ideas',
            map: doc => ({
              title: doc.title,
              tldr: doc.tldr,
              described: doc.described,
              user___NODE: doc.userId
            }),
          },
          {
            type: 'User',
            collection: 'users',
            map: doc => ({
              username: doc.username,
              email: doc.email
            }),
          },
        ],
      },
    }
  ],
}