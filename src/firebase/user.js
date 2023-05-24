import { doc, getDoc } from 'firebase/firestore';
import { db } from './init';

export const getUserByUuid = async uid => {
  const userRef = doc(db, 'users', uid);
  return await getDoc(userRef);
};
