'use client';

import React, { createContext, useEffect, useState } from 'react';
import {
  onAuthStateChanged,
  auth,
  db,
  doc,
  onSnapshot,
} from '../firebase/firebaseConfig';

export const usersContext = createContext();

const UsersStore = ({ children }) => {
  const [user, setUser] = useState('');

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        onSnapshot(doc(db, 'users', user.uid), (doc) => {
          if (doc.exists) {
            const data = doc.data();
            setUser(data);
          }
        });
      } else {
        // console.log('Logged Out');
      }
    });
  }, []);

  return (
    <usersContext.Provider value={{ user, setUser }}>
      {children}
    </usersContext.Provider>
  );
};

export default UsersStore;
