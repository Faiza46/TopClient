import React, { createContext, useEffect, useState } from 'react';

import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, sendEmailVerification, updateProfile, signInWithEmailAndPassword, sendPasswordResetEmail, onAuthStateChanged, signOut, GithubAuthProvider } from "firebase/auth";
import app from '../Firebase/Firebase.init';

export const AuthContext = createContext();
const auth = getAuth(app);

const UserContext = ({ children }) => {
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const [users, setUser] = useState('');
    const [displayName, setdisplayName] = useState('')
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }


    const GoogleSignup = () => {
        return signInWithPopup(auth, googleProvider);

    }
    const GitHubSignUp = () => {
        return signInWithPopup(auth, githubProvider)

    }
    const verifyEmail = () => {
        return sendEmailVerification(auth.currentUser);


    }
    const updateUser = () => {
        const user = auth.currentUser;

        if (user !== null) {
            // The user object has basic properties such as display name, email, etc.
            const Name = user.displayName;
            const photo = user.photoURL;
            updateProfile(auth.currentUser, {
                displayName: Name,
                photoURL: photo

                //photoURL: "https://ibb.co/5vC6fQr",

            })

        }


    }
    //sign in user 
    const signinUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)

    }
    const forgetPassword = email => {
        return sendPasswordResetEmail(auth, email)
    }
    //userobservation
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
            setdisplayName(currentUser.displayName);
            console.log('auth current user changed', currentUser);

        })
        console.log(displayName);
        return () => unsubscribe();

    }, [])

    //userLogout
    const logout = () => {
        signOut(auth)
            .then(() => {
                // Sign-out successful.
            }).catch((error) => {
                console.log(error);
            });
    }





    const authInfo = { GoogleSignup, GitHubSignUp, createUser, verifyEmail, updateUser, signinUser, forgetPassword, users, logout, displayName, loading };



    return (
        <AuthContext.Provider value={authInfo}>
            {children}

        </AuthContext.Provider>

    );
};

export default UserContext;