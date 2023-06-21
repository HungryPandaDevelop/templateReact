import {
  doc,
  collection,
  getDocs,
  query,
  where,
  orderBy,
  deleteDoc,
  limit
} from 'firebase/firestore';


import { toast } from 'react-toastify';

import { db } from 'config/firebase';

export const getListing = async (baseName,  type, uid ) => {

  const listingsRef = collection(db, baseName);
  
  let q;

  if(type==='userRef'){
    q = query(
      listingsRef,
      where('userRef', '==', uid),
      orderBy('timestamp', 'desc'),
    );
  }
  else if(type==='rooms'){
    q = query(
      listingsRef,
      where('interlocutors', 'array-contains', uid),
    );
  }
  else{
    q = query(
      listingsRef,
    );
  }
  

  const querySnap = await getDocs(q);


  const getData = querySnap.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return getData;

}



export const onDeleteCards = async (listings, listingId, name) => {
  if (window.confirm('Delete ?')) {
    await deleteDoc(doc(db, name, listingId))
    return  listings.filter((listing) => listing.id !== listingId)
  }
  else{
    return listings;
  }
}

export const onDeleteCollection = async (baseName, listingId ) => {
    try {
      await deleteDoc(doc(db, baseName, listingId))
      toast.success('Is delete');
    } catch (error) {
      toast.error('Невозможно удалить')
    }
}



