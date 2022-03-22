import { createContext, useState } from 'react';
export const LoadingContext = createContext();

export const LoadingContextProvider = ({ children }) => {
    let [loading, setLoading] = useState(false);
    return (
        <LoadingContext.Provider value={{loading, setLoading} }>
            {children}
        </LoadingContext.Provider>
    )
};