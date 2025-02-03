import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBOcYlI1Fc8PRSoMslq-gtL64d7PXD6Dc0",
  authDomain: "autolending-canada.firebaseapp.com",
  projectId: "autolending-canada",
  storageBucket: "autolending-canada.firebasestorage.app",
  messagingSenderId: "812557125534",
  appId: "1:812557125534:web:ef12858464e3020977788f",
  measurementId: "G-E1PP63VB5G"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };