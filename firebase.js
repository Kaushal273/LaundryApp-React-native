import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyARx5pix2hqfAAvzwCaK3lWJstlPBfDiRo",
  authDomain: "laundry-application-989b0.firebaseapp.com",
  projectId: "laundry-application-989b0",
  storageBucket: "laundry-application-989b0.appspot.com",
  messagingSenderId: "1071207617215",
  appId: "1:1071207617215:web:b7635aa7ae0049c8a4ec0a"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore();

export {auth,db};