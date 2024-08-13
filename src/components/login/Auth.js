import React, { useState, useEffect } from "react";
import { auth } from "../../server/firebase";
import { onAuthStateChanged } from "firebase/auth";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        onAuthStateChanged((user) => {
            setCurrentUser(user);
            setLoading(false)
        })
    }, [])

    loading && <p>loading...</p>

    return (
        <AuthContext.Provider value={{currentUser}}>
            {children}
        </AuthContext.Provider>
    )
}