import { initializeApp } from "firebase/app";
import {getAuth,initializeAuth} from 'firebase/auth';
import { getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
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

const auth = getAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});


const db = getFirestore();

export {auth,db};