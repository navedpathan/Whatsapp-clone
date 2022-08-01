import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/database';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCAU5nf__Yr-jeTwixCi4gUdt_pWguBJyA",
  authDomain: "whatsapp-mern-dedd1.firebaseapp.com",
  projectId: "whatsapp-mern-dedd1",
  storageBucket: "whatsapp-mern-dedd1.appspot.com",
  messagingSenderId: "366648354486",
  appId: "1:366648354486:web:3ff0fb87d06544bc8f6817"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider }
  export default db