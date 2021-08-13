import { firestore } from '../firestore'

const getUsers = async () => {
  const snapshot = await firestore.collection("users").get();
  snapshot.docs.forEach(doc => console.log(doc.date()));
};

export { getUsers }