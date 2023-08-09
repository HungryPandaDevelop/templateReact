import { useState, useEffect } from 'react';

import { addCardsDefault } from 'services/addListing';

import { deleteListingTemp } from 'services/getListings';

const BtnSympathy = ({ user, uid, collections }) => {

  const [collectionStatus, setСollectionStatus] = useState(false);


  useEffect(() => {
    console.log('collections', collections)
    collections && collections.map((collection) => {
      if (uid === collection.data.interlocutors[0] && user.uid === collection.data.interlocutors[1]) {
        setСollectionStatus(collection.data.id);
      };
    });

  }, []);

  const onСollectionAdd = (userInfo) => {
    addCardsDefault({
      'interlocutors': [uid, userInfo.uid],
      'status': 'see',
      'userRef': uid
    }, 'sympathy').then(res => {
      setСollectionStatus(res)
    });
  };

  const onСollectionDelete = () => {
    deleteListingTemp('sympathy', collectionStatus)
  };

  const onCollectionStatusChange = (userInfo) => {
    if (collectionStatus) {
      onСollectionDelete();
      setСollectionStatus(false);
    } else {
      onСollectionAdd(userInfo);
    }
  }


  return (
    <div
      className={`btn-ico--like btn-ico ${collectionStatus ? 'active' : ''}`}
      onClick={() => { onCollectionStatusChange(user) }}
    ></div>
  )
}

export default BtnSympathy;
