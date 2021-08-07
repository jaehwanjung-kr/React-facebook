import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBJs4B0SSGcZV7pTfQaVYlA37hdqE8FAmQ",
  authDomain: "facebook-clone-d9c0c.firebaseapp.com",
  projectId: "facebook-clone-d9c0c",
  storageBucket: "facebook-clone-d9c0c.appspot.com",
  messagingSenderId: "464727061911",
  appId: "1:464727061911:web:2a521750f34c935b6e80d2",
  measurementId: "G-79J0YZFDX7",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
