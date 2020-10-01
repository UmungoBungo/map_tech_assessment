const config = {
  apiKey: process.env.GATSBY_API_KEY,
  authDomain: process.env.GATSBY_AUTH_DOMAIN,
  databaseURL: process.env.GATSBY_DATABASE_URL,
  projectId: process.env.GATSBY_PROJECT_ID
}

class Firebase {
  constructor(app) {
    app.initializeApp(config)

    /* Firebase APIs */

    this.db = app.firestore()

  }

  // *** Users API ***

  user = uid => this.db.doc(`users/${uid}`)

  users = () => this.db.collection('users')

  // *** Locations API ***

  location = uid => this.db.doc(`locations/${uid}`)

  locations = () => this.db.collection('locations')
}

let firebase

function getFirebase(app, database) {
  if (!firebase) {
    firebase = new Firebase(app, database)
  }

  return firebase
}

export default getFirebase
