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
      'connectUsersUid': [connectUsers.my.uid, connectUsers.he.uid],
      'messages': []
    };


    // const resp = await getMyRooms(uid);

    // let roomsAvailable = false;

    // resp.forEach(room=>{    
    //   if(room.connectUsers.he.uid === connectUsers.he.uid){
    //     roomsAvailable = room.id
    //   }
    // });

    // try {
    //   if(roomsAvailable){
    //     return roomsAvailable;
        
    //   }else{
    //     const docRef = await addDoc(collection(db, 'messages'), sendData);
    //     toast.success('Комната добавлена');
    //     return docRef.id;
    //   }

  
    // } catch (error) {
    //     console.error(error);
    //     toast.error(error)
    // }

    const docRef = await addDoc(collection(db, 'messages'), sendData);
    toast.success('Комната добавлена');
}

export const getMyRooms = async (uid) =>{

  const listRef = collection(db, 'messages'); 

  const q = query(
    listRef,
    where('connectUsersUid', 'array-contains', uid)
  );

  const querySnap = await getDocs(q);

  const list = querySnap.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
  }));

  return list;
}

export const getMyRoomsOnline = async (setRooms, uid) =>{

  const listRef = collection(db, 'messages'); 

  const q = query(
    listRef,
    where('connectUsersUid', 'array-contains', uid)
  );
  let rooms = [];
  onSnapshot(q,(snapshot)=>{
    snapshot.docChanges().forEach((change) => {
      console.log('changes', change.type)
      if (change.type === "added") {
        rooms = [...rooms,{id: change.doc.id, data: change.doc.data()}]
      }
      if (change.type === "modified") {
        rooms = rooms.map((item) => {
          if (item.id === change.doc.id){
            return {id: change.doc.id, data: change.doc.data()}
          }
          else{
            return item;
          }
        }); 
      }
      if (change.type === "removed") {
        rooms = rooms.filter(item => item.id !== change.doc.id)
      }

      setRooms(rooms);
    });

    
  })

};