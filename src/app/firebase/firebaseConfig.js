import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './firebaseInit';
import {
  getFirestore,
  setDoc,
  addDoc,
  getDoc,
  onSnapshot,
  doc,
  collection,
  getDocs,
  query,
  where,
  deleteDoc,
} from 'firebase/firestore';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from 'firebase/auth';

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export {
  db,
  setDoc,
  addDoc,
  getDoc,
  onSnapshot,
  doc,
  collection,
  getDocs,
  where,
  auth,
  query,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  deleteDoc,
};
