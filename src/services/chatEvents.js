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

import { db } from 'default/config/firebase';

import { v4 as uuidv4 } from 'uuid';

export const createRoom = async (connectUsers, uid) => {
    const sendData ={
      'connectUsers': connectUsers,
      'connectUsersUid': [connectUsers.my.uid, connectUsers.he.uid],
      'messages': [],
    };


    const resp = await getMyRooms(uid);

    let roomsAvailable = false;

    resp.forEach(room=>{    
      if(room.connectUsersUid[1] === connectUsers.he.uid){
        console.log('1')
        roomsAvailable = room.id
      }
      if(room.connectUsersUid[0] === connectUsers.he.uid){
        console.log('2')
        roomsAvailable = room.id
      }
    });

    const generateId = uuidv4();

    try {
      if(roomsAvailable){
        return roomsAvailable;
        
      }else{
        console.log('create')
        await setDoc(doc(db, 'rooms',  generateId), {...sendData, id: generateId});
        toast.success('Комната добавлена');
        return generateId;
      }

  
    } catch (error) {
        console.error(error);
        toast.error(error)
    }

}

export const getMyRooms = async (uid) =>{

  const listRef = collection(db, 'rooms'); 

  const q = query(
    listRef,
    where('connectUsersUid', 'array-contains', uid)
  );

  const querySnap = await getDocs(q);

  const list = querySnap.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
  }));

  console.log('getMyRooms', list)

  return list;
}

const watchListing = (q, updateSnap)=>{
  let listing = [];

  onSnapshot(q,(snapshot)=>{

    snapshot.docChanges().forEach((change) => {
      if (change.type === "added") {
        listing = [...listing,{id: change.doc.id, data: change.doc.data()}]
      }
      if (change.type === "modified") {
        listing = listing.map((item) => {
          if (item.id === change.doc.id){
            return {id: change.doc.id, data: change.doc.data()}
          }
          else{
            return item;
          }
        }); 
      }
      if (change.type === "removed") {
        listing = listing.filter(item => item.id !== change.doc.id)
      } 

      updateSnap(listing);
    });
  });
}

export const getMyRoomsOnline = async (setRooms, uid) =>{

  const listRef = collection(db, 'rooms'); 

  const q = query(
    listRef,
    where('connectUsersUid', 'array-contains', uid)
  );

  const updateSnap = (listing)=>{
    setRooms(listing);


  }
  
  watchListing(q, updateSnap);

};



export const getMyRoomMessages = (setMessages, id) => {

  const listRef = collection(db, 'rooms'); 

  const q = query(
    listRef,
    where('id', '==', id)
  );

  const updateSnap = (listing)=>{
    setMessages(listing[0].data.messages);
  }
  
  watchListing(q, updateSnap);
}

export const sendMessage = async (roomId, text,  uid) => {
  
  const getDocRoomInfo =  await getDoc(doc(db, 'rooms', roomId));
  const getRoomInfo = getDocRoomInfo.data();

  getRoomInfo.messages.push({
    text: text,
    uid: uid,
    read: false,
    timestamp: new Date()
  });

  try {
    await setDoc(doc(db, 'rooms', roomId), getRoomInfo);
    toast.success('Сообщение отправлено');
    
  } catch (error) {
      console.error(error);
      toast.error(error)
  }
}

export const updateRead = async (roomId, messages)=>{
  console.log(messages)
  const changeRead = messages.map(item=>{
    item.read = true
    return item;
  })
  messages.messages = changeRead
  await updateDoc(doc(db, 'message', roomId), messages);
}