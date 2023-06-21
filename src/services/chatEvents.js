import { toast } from 'react-toastify';
// import { Timestamp } from '@google-cloud/firestore';
import {
  collection,
  query,
  onSnapshot,
  serverTimestamp,
  addDoc,
  getDocs,
  getDoc,
  updateDoc,
  doc,
  where,
  setDoc,
  orderBy
} from 'firebase/firestore';

import { db } from 'config/firebase';

export const createRoom = async (connectUsers, uid) => {
    const sendData ={
      'connectUsers': connectUsers,
      'messages': []
    };
    let getCheckRooms;
    getMyRooms().then(res=>{
      getCheckRooms = res.forEach(room=>{
        if(room.connectUsers[0].uid === uid){
          getCheckRooms = 'чат уже есть'
        }
      });
    });

    console.log(getCheckRooms)

    try {
      // const docRef = await addDoc(collection(db, 'messages'), sendData);
      // toast.success('Данные обновлены');
      // return docRef.id;
  
    } catch (error) {
        console.error(error);
        toast.error(error)
    }

}

export const getMyRooms = async (uid) =>{

  const listRef = collection(db, 'messages'); 

  const q = query(
    listRef,
    // where("interlocutors", "array-contains", uid),
  );

  const querySnap = await getDocs(q);

  const list = querySnap.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
  }));

  // callback(list);
  return list;
}