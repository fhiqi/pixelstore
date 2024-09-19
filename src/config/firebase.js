import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA8w_GcdEB88YPIeGwfCSWTxg6-m4uyvn4",
    authDomain: "ippl-auth.firebaseapp.com",
    projectId: "ippl-auth",
    storageBucket: "ippl-auth.appspot.com",
    messagingSenderId: "730419480251",
    appId: "1:730419480251:web:1e70c90c2df6269a1c4b9e"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const firebaseAuthentication = getAuth(app);
  export { firebaseAuthentication };