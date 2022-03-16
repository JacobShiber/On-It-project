import { createContext, useState } from 'react';
export const ScheduleContext = createContext();

export const ScheduleContextProvider = ({ children }) => {
    const [schedule, setSchedule] = useState({});
    return (
        <ScheduleContext.Provider value={{schedule, setSchedule} }>
            {children}
        </ScheduleContext.Provider>
    )
};