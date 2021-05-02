const Firestore = require('@google-cloud/firestore');

module.exports =  {
  db: new Firestore({
    projectId: process.env.GCLOUD_PROJECT,
    keyFilename: process.env.GOOGLE_APPLICATION_CREDENTIALS,
  })
}