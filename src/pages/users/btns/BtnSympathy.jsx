import { useState, useEffect } from 'react';

import { addCardsDefault } from 'services/addListing';

import { deleteListingTemp } from 'services/getListings';

const BtnSympathy = ({ user, account, collections }) => {

  const [collectionStatus, setСollectionStatus] = useState(false);


  useEffect(() => {
    console.log('collections', collections)
    collections && collections.map((collection) => {
      if (user.uid === collection.connectUsersUid[1]) {
        setСollectionStatus(collection.id);
      };
    });

  }, []);

  const onСollectionAdd = (userInfo) => {
    addCardsDefault({
      'connectUsersUid': [account.uid, userInfo.uid],
      'status': 'see',
      'userRef': account.uid
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
