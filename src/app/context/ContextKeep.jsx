import React from 'react';
import { createContext, useState } from 'react';
export const ContextKeep = createContext();

const ContextKeepProvider = ({children}) => {
  const [toggleSideBar, setToggleSideBar] = useState(false);

  return (
    <>
      <ContextKeep.Provider
        value={{ toggleSideBar, setToggleSideBar }}
      >
        {children}
      </ContextKeep.Provider>
    </>
  );
};
export default ContextKeepProvider;
