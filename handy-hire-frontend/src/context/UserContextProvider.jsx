import React, {useState} from "react";
import UserContext from "./userContex";


export const UserContextProvider = ({children}) => {
    const [user, setUser] = useState({});

    return(
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}
