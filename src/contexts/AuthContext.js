import React, { useState, useEffect } from "react"

import firebase from 'gatsby-plugin-firebase';

export const AuthContext = React.createContext({})


function AuthProvider({children}) {
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)
    
  // function signup(email, password) {
  //   return firebase.auth().createUserWithEmailAndPassword(email, password)
  // }
  
  // function login(email, password) {
  //   return firebase.auth().signInWithEmailAndPassword(email, password)
  // }

  // function logout() {
  //   return firebase.auth().signOut()
  // }


  useEffect(() => {
      //it tell when user get set
    const unsubscribe = firebase.auth().onAuthStateChanged(user => {
      setCurrentUser(user)
      setLoading(false)

      
    })

    return unsubscribe
  }, [])


  const value = {

    currentUser
    // login,
    // logout,
    // signup
  }

    return (
        <AuthContext.Provider value={value}>
        {!loading && children}
      </AuthContext.Provider>
    )
}

export default AuthProvider
