import { 
  getAuth, 
  signInWithPopup, 
  GoogleAuthProvider,
  updateProfile,
} from 'firebase/auth';

import {
  doc, 
  setDoc, 
  getDoc, 
  serverTimestamp 
} from 'firebase/firestore';

import { db } from 'config/firebase';

import { toast } from 'react-toastify';


export const googleAuth = async () => {

  try {

    const auth = getAuth();

    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({
      prompt: 'select_account',
    });
    
    const userCredential = await signInWithPopup(auth, provider);

    const user = userCredential.user;

    updateProfile(auth.currentUser, {
      displayName: user.displayName
    });

    // check for user
    const docRef = doc(db, 'users', user.uid);
    const docSnap = await getDoc(docRef);


    if (!docSnap.exists()) {

      await setDoc(doc(db, 'users', user.uid), {
        name: user.displayName,
        email: user.email,
        uid: user.uid,
        timestamp: serverTimestamp()
      });

      toast.success('Rегистрация успешна');
    }else{
      toast.success('Авторизация успешна');
    }

    return  true;
  }
  catch(error){
    console.log(error)
    return false;
  }
}