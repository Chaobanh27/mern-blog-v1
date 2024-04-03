// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: 'mern-blog-496e6.firebaseapp.com',
  projectId: 'mern-blog-496e6',
  storageBucket: 'mern-blog-496e6.appspot.com',
  messagingSenderId: '645609468993',
  appId: '1:645609468993:web:1ac6e4dab424dc1e4ec2c0',
  measurementId: 'G-DGEYN84BKY'
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)