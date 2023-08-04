import { useState, useEffect } from 'react';

import { addCardsDefault } from 'services/addListing';

import { deleteListingTemp } from 'services/getListings';

const BtnCollections = ({ user, account, collections, base, btnClass }) => {

  const [collectionStatus, setСollectionStatus] = useState(false);


  useEffect(() => {
    collections && collections.map((collection) => {
      if (user.uid === collection.likeUserRef) {
        setСollectionStatus(collection.id);
      };
    });

  }, []);

  const onСollectionAdd = (userInfo) => {
    addCardsDefault({ 'userRef': account.uid, 'likeUserRef': userInfo.uid }, base).then(res => {
      setСollectionStatus(res)
    });
  };

  const onСollectionDelete = () => {
    deleteListingTemp(base, collectionStatus)
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
      className={`btn-ico--${btnClass} btn-ico ${collectionStatus ? 'active' : ''}`}
      onClick={() => { onCollectionStatusChange(user) }}
    ></div>
  )
}

export default BtnCollections;
