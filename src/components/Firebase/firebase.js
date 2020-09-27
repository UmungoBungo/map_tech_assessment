const config = {
  apiKey: process.env.GATSBY_API_KEY,
  authDomain: process.env.GATSBY_AUTH_DOMAIN,
  databaseURL: process.env.GATSBY_DATABASE_URL,
  projectId: process.env.GATSBY_PROJECT_ID,
  storageBucket: process.env.GATSBY_STORAGE_BUCKET,
  messagingSenderId: process.env.GATSBY_MESSAGING_SENDER_ID,
};

class Firebase {
  constructor(app) {
    app.initializeApp(config);

    /* Helper */

    this.fieldValue = app.firestore.FieldValue;

    /* Firebase APIs */

    this.db = app.firestore()

  }

  // *** Locations API ***

  location = uid => this.db.doc(`locations/${uid}`);

  locations = () => this.db.collection('locations');
}

let firebase;

function getFirebase(app, database) {
  if (!firebase) {
    firebase = new Firebase(app, database);
  }

  return firebase;
}

export default getFirebase;
