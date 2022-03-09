import { createContext, useState } from 'react';


export const usersContext = createContext();

export const usersContextProvider = ({ children }) => {
    const [user, setUser] = useState({});
    return (
        <usersContext.Provider value={{user, setUser} }>
            {children}
        </usersContext.Provider>
    )
};

