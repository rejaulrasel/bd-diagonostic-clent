import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  

  // create user with email and password
  const createUser = (email, passsword) => {
    return createUserWithEmailAndPassword(auth, email, passsword);
  };


  // sign in email and password
  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };


  // user observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("user observing");
      setUser(currentUser);
    });


    return () => unsubscribe();
  }, []);

  const authInfo = {
    createUser,
    signIn,
    user,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
