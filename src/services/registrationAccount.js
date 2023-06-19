

import { 
  getAuth,
  updateProfile,
  createUserWithEmailAndPassword,
} from 'firebase/auth';


import { db } from 'config/firebase';

import {
  doc,
  setDoc,
  serverTimestamp
} from 'firebase/firestore';


import { toast } from 'react-toastify';



export const registrationAccount = async (formData) => {
  const { name, email, password } = formData;

  try {

    const auth = getAuth();

    const userCredential = await createUserWithEmailAndPassword(auth, email, password);

    updateProfile(auth.currentUser, {
      displayName: name
    });
    /* add to base auth */

    /* add to firestore base */
    const user = userCredential.user;

    const formDataCopy = { ...formData, uid: user.uid };

    delete formDataCopy.password;

    formDataCopy.timestamp = serverTimestamp();

    await setDoc(doc(db, 'users', user.uid), formDataCopy);

    toast.success('Rегистрация успешна');
  
    return true;

  } catch (error) {
    if( error.code === 'auth/email-already-in-use'){
      toast.error('Такой Email уже есть');
    }

    return false;
  }
}
    
