import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyB2nOfRjLa9Dr9vJe0EC3O_BLo97VpmSTI",
  authDomain: "pickmepickme-c84be.firebaseapp.com",
  projectId: "pickmepickme-c84be",
  storageBucket: "pickmepickme-c84be.appspot.com",
  messagingSenderId: "184176705369",
  appId: "1:184176705369:web:49c182bce465c5ac72d648"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const signupWithEmailAndPassword = (email, password) => {
return createUserWithEmailAndPassword(auth, email, password);
};

export { app, auth, signupWithEmailAndPassword, signInWithEmailAndPassword };