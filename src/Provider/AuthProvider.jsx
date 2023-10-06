import { createContext, useState } from "react";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, sendEmailVerification, signInWithPopup, updateProfile } from "firebase/auth";
import auth from "../firebase/firebase.config";


export const  AuthContext = createContext(null)

const githubProvider = new GithubAuthProvider();
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
  const [user, setUser] = useState();


  // create account email and password
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Sing in with github 

  const githubSingIn= ()=>{
    return signInWithPopup(auth,githubProvider)
  }

  // singIn with google
  const googleSingIn = ()=>{
    return signInWithPopup(auth,googleProvider)
  }

  // update user profile

  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

// user email verification

const emailVerification =()=>{
   return sendEmailVerification(auth.currentUser)
}
  const authInfo = {
    user,
    createUser,
    updateUserProfile,
    emailVerification,
    githubSingIn,
    googleSingIn,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;