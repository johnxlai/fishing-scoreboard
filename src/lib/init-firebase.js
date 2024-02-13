// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDa_USprEjFLlo4j6iR4ShyGYScaIQYWqI',
  authDomain: 'ice-fishing-2024-6d95c.firebaseapp.com',
  projectId: 'ice-fishing-2024-6d95c',
  storageBucket: 'ice-fishing-2024-6d95c.appspot.com',
  messagingSenderId: '312589463165',
  appId: '1:312589463165:web:cace78835f746a110d4b14',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//initialize firestore
export const db = getFirestore(app);
