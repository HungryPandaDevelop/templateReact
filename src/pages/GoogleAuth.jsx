import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,

} from "firebase/auth";

import {
  doc,
  setDoc,
  getDoc,
  serverTimestamp
} from 'firebase/firestore';

import { db } from 'config/firebase';

import { toast } from 'react-toastify';


const GoogleAuth = () => {

  const onAuth = async () => {
    const auth = getAuth();
    const provider = await new GoogleAuthProvider();
    provider.setCustomParameters({
      prompt: 'select_account',
    });
    await signInWithPopup(auth, provider).then(async function (res) {
      console.log('user', res.user)
      const user = res.user;
      //   const user = userCredential.user;

      updateProfile(auth.currentUser, {
        displayName: user.displayName
      });

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
      } else {
        toast.success('Авторизация успешна');
      }
    });

  }

  return (
    <>
      <h1>google auth</h1>
      <div className="btn btn--blue" onClick={onAuth}>GoogleAuth</div>
    </>
  );
};

export default GoogleAuth;