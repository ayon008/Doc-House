import { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile, GoogleAuthProvider, signInWithPopup, deleteUser, reauthenticateWithCredential, EmailAuthProvider } from "firebase/auth";
import app from '../Components/Firebase/firebase.init';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();

    // User
    const [user, setUser] = useState(null);

    // Loading
    const [loading, setLoading] = useState(true);


    const googleLogin = () => {
        return signInWithPopup(auth, provider)
    }

    const signUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)

    }

    const logOut = () => {
        return signOut(auth)
    }

    const updateUser = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }

    const removeUser = () => {
        return deleteUser(auth.currentUser)
    }

    const authenticateUser = (email, password) => {
        const credential = EmailAuthProvider.credential(email, password)
        return reauthenticateWithCredential(user, credential)
    }

    useEffect(() => {
        const unSubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
                setLoading(false)
                console.log(user);
            }
            else {
                setUser(null)
            }
        })
        return () => unSubscribed()
    }, [])


    const authInfo = {
        user,
        signIn,
        signUp,
        updateUser,
        logOut,
        googleLogin,
        removeUser,
        loading,
        authenticateUser
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;