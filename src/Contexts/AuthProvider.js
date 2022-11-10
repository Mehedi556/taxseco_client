import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth , onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import app from '../Firebase/firebase.config'



export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {




    const authInfo = { user , createUser , signIn , logOut , signUpFacebook}
    return (
        <AuthContext.Provider value ={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;