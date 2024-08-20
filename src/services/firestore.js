// src/services/firestore.js
import { collection, addDoc,setDoc, getDocs, doc, updateDoc, query, where } from 'firebase/firestore';
import { db } from '../firebase/firebase';

// user Register
export const registerUser=async(data)=>{
  try{
    const userDocRef=doc(db,"users",data.email);
    await setDoc(userDocRef,data)
    return true;
  }catch(error){
    console.log(error);
    throw error;
  }
}







// Fetch Applications by User
export const fetchApplicationsByUser = async (userId) => {
  const q = query(collection(db, 'applications'), where('userId', '==', userId));
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map(doc => doc.data());
};
