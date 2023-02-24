// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
import { getEnvironments } from '../helpers/getEnvironments';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

//Testing

const env = getEnvironments();
console.log(env);

const firebaseConfig = {
  apiKey: 'AIzaSyARxpTGwvyBeuLn3MVPDRcFhEz8uOKf7f0',
  authDomain: 'journal-app-testing-940d2.firebaseapp.com',
  projectId: 'journal-app-testing-940d2',
  storageBucket: 'journal-app-testing-940d2.appspot.com',
  messagingSenderId: '499354492113',
  appId: '1:499354492113:web:8a8b07055cb51b912af9f0',
};

// Production
// const firebaseConfig = {
//   apiKey: 'AIzaSyA2JZYL5HDR3fA7AeiL_oumKLTFNFLHQvI',
//   authDomain: 'react-cursofernandoherrera.firebaseapp.com',
//   projectId: 'react-cursofernandoherrera',
//   storageBucket: 'react-cursofernandoherrera.appspot.com',
//   messagingSenderId: '399329763109',
//   appId: '1:399329763109:web:7a3cb118dfcee7a4c944cc',
// };

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
