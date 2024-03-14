STEP NUMBER 01:- (CREATING A USECONTEXT)

• CREATING A FOLDER OF CONTEXT
    • CREATING A FILE OF UserContext.js (FIRST LATTER WILL BE CAPITAL)
        • IMPORT REACT FROM 'REACT'
        • Const Usercontext = React.createContext(); 
        • export default Usercontext

    • CREATIG A FILE OF UserContextProvider.jsx ( FIRST LATTER WILL BE CAPITAL) 
        • `
        import React, { useState } from "react";
        import userContext from "./UserContext";

        function UserContextProvider({ children }) {
        const [user, setUser] = React.useState(null);
        return (
                <userContext.Provider value={{ user, setUser }}>
                     {children}
                </userContext.Provider>
                );
        }

        export default UserContextProvider;
        `

    • HOW TO ACCESS IN COMPONENT
        • IMPORT KARNA HAI UserContext Ko NaKi Provider Ko
        • import { useContext } from 'react'
        const { setUser } = useContext(CONTEXT KA NAAM NA KI POVIDER KA) PROVIDER KO HAM SIRF USE KARENGE APP.JSX MEIN 
    • import UserContextProvider from "./context/UserContextProvider";
    <UserContextProvider>
    </UserContextProvider>