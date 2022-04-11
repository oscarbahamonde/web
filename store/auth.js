import {getAuth, signInWithPopup, signOut, GoogleAuthProvider } from 'firebase/auth';
import { initializeApp } from 'firebase/app';

const config = {
        apiKey: "AIzaSyC-EWWaIHK_yLZMM9EAMhzSH7cyYc6exls",
        authDomain: "intaas-880b3.firebaseapp.com",
        projectId: "intaas-880b3",
        storageBucket: "intaas-880b3.appspot.com",
        messagingSenderId: "244469163250",
        appId: "1:244469163250:web:00238d206608e925e4dc6b",
        measurementId: "G-JMDFMJL66L"
      }
const app = initializeApp(config);
const auth = getAuth(app);
const provider = new GoogleAuthProvider(auth)


