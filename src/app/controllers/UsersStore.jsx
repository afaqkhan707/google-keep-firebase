'use client';

import { createContext, useEffect, useState } from 'react';
import {
  onAuthStateChanged,
  auth,
  db,
  doc,
  onSnapshot,
  collection,
  query,
  where,
} from '../firebase/firebaseConfig';

export const usersContext = createContext();

const UsersStore = ({ children }) => {
  const [user, setUser] = useState('');
  const [cards, setCards] = useState([]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        onSnapshot(doc(db, 'users', user.uid), (doc) => {
          // console.log(user.uid);
          if (doc.exists) {
            const data = { ...doc.data(), userId: user.uid };
            // console.log(data);
            setUser(data);
          }
        });
      } else {
        // console.log('Logged Out');
      }
    });
  }, []);

  useEffect(() => {
    if (user) {
      const q = query(
        collection(db, 'cards'),
        where('ownerId', '==', user.userId)
      );
      onSnapshot(q, (querySnapshot) => {
        const notes = [];
        querySnapshot.forEach((doc) => {
          notes.push({ ...doc.data(), id: doc.id });
        });
        setCards(notes);
      });
    }
    if (user.role === 'admin') {
      const q = query(collection(db, 'cards'));
      onSnapshot(q, (querySnapshot) => {
        const notes = [];
        querySnapshot.forEach((doc) => {
          notes.push({ ...doc.data(), id: doc.id });
          // console.log(user);
        });
        setCards(notes);
      });
    }
  }, [user]);

  return (
    <usersContext.Provider value={{ user, setUser, cards }}>
      {children}
    </usersContext.Provider>
  );
};

export default UsersStore;
