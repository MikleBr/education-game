import { useEffect } from 'react';
import { useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth, db } from '../firebase/init';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { getUserByUuid } from '../firebase/user';

const { createContext } = require('react');

export const AuthContext = createContext({
  currentUser: null,
  userData: null,
  isLoading: false,
});

export function AuthProvider({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState(null);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const getUser = async user => {
      const userDoc = await getUserByUuid(user.uid);
      setUserData(userDoc.data());
    };
    onAuthStateChanged(auth, user => {
      setCurrentUser(user);
      setIsLoading(false);
      if (user) getUser(user);
    });
  }, []);

  const updateUserData = async newData => {
    await updateDoc(doc(db, 'users', currentUser.uid), newData);
    const userDoc = await getUserByUuid(currentUser.uid);
    setUserData(userDoc.data());
  };

  return (
    <AuthContext.Provider
      value={{ currentUser, userData, isLoading, updateUserData }}
    >
      {children}
    </AuthContext.Provider>
  );
}
