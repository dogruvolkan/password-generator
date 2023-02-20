import { createContext  } from "react";

export const PasswordContext = createContext();

export const PasswordProvider = ({children}) =>{

    

    return (
        <PasswordContext.Provider>
            {children}
        </PasswordContext.Provider>
    )
}