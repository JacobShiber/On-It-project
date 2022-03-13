import { createContext, useEffect, useState } from 'react';
import {GetAllUsers} from '../../services/users/users.service'
export const UsersContext = createContext();

export const UsersContextProvider = ({ children }) => {
    const [user, setUser] = useState([]);
  useEffect(() => {
    GetAllUsers()    
    .then((res) => setUser(res));
  }, []);

    return (
        <UsersContext.Provider value={{user, setUser} }>
            {children}
        </UsersContext.Provider>
    )
};


