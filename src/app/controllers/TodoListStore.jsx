'use client';

import React, { createContext, useState } from 'react';

export const TotalContext = createContext();

const TodoStore = ({ children }) => {
  const [notesList, setNotesList] = useState([]);
  console.log(notesList.length);

  return (
    <TotalContext.Provider value={{ notesList, setNotesList }}>
      {children}
    </TotalContext.Provider>
  );
};

export default TodoStore;
