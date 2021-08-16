import React, { createContext, useContext, useEffect,useState, } from 'react'
import { auth } from '../firebase'
export const Authprovider = createContext()

//custom hook for using the authprovider hook
export function useAuth() {
    return useContext(Authprovider)
}
export default function Context_provider({ children }) {
    //state handling to capture the current user 
    const [CurrentUser, setCurrentuser] = useState(" ")
    //handling the loading state
    const [loading, setloading] = useState(true)
    //
    function signup(email, password) {
        return auth.createUserWithEmailAndPassword(email, password)
    }
    function login(email,password) {
        return auth.signInWithEmailAndPassword(email,password)
    }
    function logout() {
        return auth.signOut()
    }
    function Reset(email) {
        return auth.sendPasswordResetEmail(email)
    }
    //firebase provides the built in method to track the user
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setCurrentuser(user)
            //when user is set then loading becomes false
            setloading(false)
        })
        return unsubscribe
    }, [])
    let value = {
        CurrentUser,
        signup,
        login,
        logout,
        Reset
    }
    return (
        <Authprovider.Provider value={value}>
        {/* if loading is false then only the children should be rendered  */}
            {!loading && children}
        </Authprovider.Provider>
    )
}
