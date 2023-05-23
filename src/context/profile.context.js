import { createContext, useState } from "react";


const profileContext = createContext();

export const ProfileProvider = ({ children }) => {
     const [profile] = useState(false);
     

     return (<profileContext.Provider value={profile}>{children}</profileContext.Provider>
     );
}