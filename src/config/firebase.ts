import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBs3I3uPv2bMS3Bdl9mBw3_dr5-4nQgypY",
  authDomain: "mypersonallibrarystore.firebaseapp.com",
  projectId: "mypersonallibrarystore",
  storageBucket: "mypersonallibrarystore.firebasestorage.app",
  messagingSenderId: "546127999121",
  appId: "1:546127999121:web:6b4a4d8bfe73e766d84f30"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
