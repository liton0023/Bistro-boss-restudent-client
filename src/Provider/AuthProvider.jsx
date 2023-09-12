import { getAuth } from "firebase/auth";
import { createContext, useState } from "react";
import { app } from "../firebase/firebase.config";

export const AuthContext=createContext(null);
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [loading, setLoading]=useState(true);
    const authInfo={
    loading
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;