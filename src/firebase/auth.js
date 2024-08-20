// src/firebase/auth.js
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged  } from 'firebase/auth';
import { auth, db } from './firebase';
import { doc, setDoc, updateDoc, addDoc, deleteDoc, getDoc,getDocs, collection } from 'firebase/firestore';

// Register User
export const registerUser = async(email, password, data) => {
  try{
    const userCredentials=await  createUserWithEmailAndPassword(auth, email, password);
    console.log(userCredentials)
    const user=userCredentials.user;
    console.log("Registered")
    await setDoc(doc(db,'users',user.email),{
      email:user.email,
      ...data
    })
    return true;
  }catch(e){
    console.log('Error registering user');
    return false;
  }
};



// export const registerAdmin = async(email, password, data) => {
//   try{
//     const userCredentials=await  createUserWithEmailAndPassword(auth, email, password);
//     console.log(userCredentials)
//     const user=userCredentials.user;
//     console.log("Registered")
//     await setDoc(doc(db,'users',user.email),{
//       email:user.email,
//       ...data
//     })
//     return true;
//   }catch(e){
//     console.log('Error registering user');
//     return false;
//   }
// };
// registerAdmin("rajsharmahwh19@gmail.com","admin@2002",{name:"Raj Sharma",role:"admin"});

//login admin
export const loginAdmin =async (email, password) => {
 try{
   // Fetch user data from Firestore by email (document ID)
   const userDocRef = doc(db, 'users', email); // Assuming email is the document ID
      const user=await findUser(email);
     const res=await signInWithEmailAndPassword(auth, email, password);
     if(res && user==='admin'){
       return 1;
     }else if(res && user ==='staff'){
       return 2;
     }else if(res && user==='user'){
      return 3;
     }else{
      return 0;
     }
 }catch(e){
  console.log("Error int login auth.js  ",e)
 }
  
};

const findUser=async(email)=>{
  const userDocRef = doc(db, 'users', email); // Assuming email is the document ID
  const userDoc = await getDoc(userDocRef);
  console.log(userDoc)
  if(userDoc._document.data.value.mapValue.fields.role.stringValue==='admin'){
    return "admin"
  }else if(userDoc._document.data.value.mapValue.fields.role.stringValue==='staff'){
    return "staff"
  }else if(userDoc._document.data.value.mapValue.fields.role.stringValue==='user'){
    return "user"
  }
}

// Login User
export const loginUser =async (email, password) => {
  const res=await signInWithEmailAndPassword(auth, email, password);
  console.log(res);
};



// Logout User
export const logout = async() => {
  return await signOut(auth);
};

// Listen for Auth State Changes
export const onAuthStateChange = (callback) => {
    const res= onAuthStateChanged(auth, callback)
    return res;
  };



  // Add Service
export const addService = async (serviceData) => {
  try{
    await setDoc(doc(db, 'services',serviceData.serviceId), serviceData);
    return 1
  }catch(e){
    return 0;
  }
};

  // Add Application
  export const addApplication = async (serviceData) => {
    try{
      console.log(serviceData.applicationId)
      console.log(serviceData)
      await setDoc(doc(db, 'applications',serviceData.applicationId), serviceData);
      return 1
    }catch(e){
      console.log(e)
      return 0;
    }
  };

// Fetch Services
export const fetchApplications = async (user) => {
  const querySnapshot = await getDocs(collection(db, 'applications'));
  const res= querySnapshot.docs.map(doc => doc.data());
  const filterArray=res.filter((item)=>(item.user.email==user))
  return filterArray;
};

export const fetchAllApplications = async () => {
    const querySnapshot = await getDocs(collection(db, 'applications'));
    const res= querySnapshot.docs.map(doc => doc.data());
    return res;
  };

  // Update application status
export const updateApplicationStatus = async (applicationId, newStatus) => {
  try{
    const serviceDoc = doc(db, 'applications', applicationId);
  const res= await updateDoc(serviceDoc, {
    status:newStatus,
    updatedAt:new Date()
  });
  return 1;
  }catch(e){
    return -1;
  }
};

// Delete application
export const deleteApplication = async (id) => {
  try {
    const serviceDoc = doc(db, 'services', id);
    console.log(serviceDoc)
    await deleteDoc(serviceDoc);
    return 1;
  } catch (e) {
    console.log('Error deleting service', e);
    return 0;
  }
};

// Fetch Services
export const fetchServices = async () => {
  const querySnapshot = await getDocs(collection(db, 'services'));
  return querySnapshot.docs.map(doc => doc.data());
};

export const fetchSingleServices = async (id) => {
  try{
    const querySnapshot = await getDocs(collection(db, 'services'));
  const res=querySnapshot.docs.map(doc => doc.data())
  const data=res.find((item)=>item.serviceId==id)
  return data;
  }catch(e){
    console.log(e)
  }
};

// Update Service
export const updateService = async (id, updatedData) => {
  try{
    const serviceDoc = doc(db, 'services', id);
  const res= await updateDoc(serviceDoc, updatedData);
  return 1;
  }catch(e){
    return -1;
  }
};

// Delete Service
export const deleteService = async (id) => {
  try {
    const serviceDoc = doc(db, 'services', id);
    console.log(serviceDoc)
    await deleteDoc(serviceDoc);
    return 1;
  } catch (e) {
    console.log('Error deleting service', e);
    return 0;
  }
};

// add staff
export const registerStaff = async(email, password, data) => {
  try{
    const userCredentials=await  createUserWithEmailAndPassword(auth, email, password);
    console.log(userCredentials)
    const user=userCredentials.user;
    console.log("Registered")
    await setDoc(doc(db,'users',user.email),{
      email:user.email,
      role:"staff",
      ...data
    })
    return true;
  }catch(e){
    console.log('Error registering user');
    return false;
  }
};
