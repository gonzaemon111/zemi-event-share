import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/analytics';

const config = {
  apiKey: process.env.VITE_FB_API_KEY,
  authDomain: process.env.VITE_FB_AUTH_DOMAIN,
  projectId: process.env.VITE_FB_PROJECT_ID,
  storageBucket: process.env.VITE_FB_STORAGE_BUCKET,
  messagingSenderId: process.env.VITE_FB_MESSAGE_SENDER_ID,
  appId: process.env.VITE_FB_APP_ID,
  measurementId: process.env.VITE_FB_MEASUREMENT_ID
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
  firebase.analytics();
}

const db = firebase.firestore();
const storage = firebase.storage();
const auth = firebase.auth();

export { db, auth, storage }
