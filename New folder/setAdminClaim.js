const admin = require('firebase-admin');

// Replace the path below with the path to your Firebase Admin SDK private key JSON file
const serviceAccount = require('./royals-f5351-firebase-adminsdk-fbsvc-b9632813bb.json');


admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const uid = 'X8i1j0P1iuaPcpAZGqhVgcUt4fZ2'; // Replace with the admin user UID

admin.auth().setCustomUserClaims(uid, { isAdmin: true })
  .then(() => {
    console.log(`Custom claim 'isAdmin' set to true for user: ${uid}`);
  })
  .catch(error => {
    console.error('Error setting custom claims:', error);
  });
