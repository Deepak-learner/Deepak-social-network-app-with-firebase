import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCw3GeCpM_TqpEqROPCsUWeuqRuvFa1kBg",
  authDomain: "deepak-social-network-app.firebaseapp.com",
  projectId: "deepak-social-network-app",
  storageBucket: "deepak-social-network-app.appspot.com",
  messagingSenderId: "83343984258",
  appId: "1:83343984258:web:5defb5501868a05571969b",
  measurementId: "G-M92T478DJ3"
};


const app = initializeApp(firebaseConfig);
const fireDb = getFirestore(app)

export {app , fireDb}