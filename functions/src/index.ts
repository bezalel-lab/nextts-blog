import * as functions from "firebase-functions";
// eslint-disable-next-line @typescript-eslint/no-var-requires
const admin = require("firebase-admin");
admin.initializeApp();
const db = admin.firestore();

export const createUserDocument = functions.auth.user().onCreate((user) => {
  db.collection("users")
      .doc(user.uid)
      .set(JSON.parse(JSON.stringify(user)));
});
