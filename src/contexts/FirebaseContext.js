import React, { createContext, useContext, useState, useEffect, useCallback } from "react"
import { authInstance, signInWithEmailAndPassword, signOut } from "lib/firebase-lib"

const FirebaseContext = createContext()

const FirebaseProvider = ({ children }) => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const unsubscribe = authInstance.onAuthStateChanged((user) => {
      setUser(user)
    })

    return unsubscribe
  }, [])

  useEffect(() => {
    setUser(authInstance.currentUser)
  }, [])

  const login = useCallback((email, password) => {
    return signInWithEmailAndPassword(authInstance, email, password)
  }, [])

  const logout = useCallback(() => {
    signOut(authInstance)
  }, [])

  const value = {
    user,
    login,
    logout,
  }
  return <FirebaseContext.Provider value={value}>{children}</FirebaseContext.Provider>
}

const useFirebase = () => {
  const context = useContext(FirebaseContext)
  if (!context) {
    throw new Error(`useFirebase must be used within a FirebaseProvider`)
  }
  return context
}

export { FirebaseProvider, useFirebase }
