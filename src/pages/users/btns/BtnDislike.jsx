import { useState, useEffect } from 'react';

import { addCardsDefault } from 'services/addListing';

import { deleteListingTemp } from 'services/getListings';

const BtnDislike = ({ user, account, dislikes }) => {

  const [likeStatus, setLikeStatus] = useState(false);


  useEffect(() => {

    dislikes.map((like) => {
      if (user.uid === like.likeUserRef) {
        setLikeStatus(like.id);
      };
    });

  }, []);

  const onLikeAdd = (userInfo) => {
    addCardsDefault({ 'userRef': account.uid, 'likeUserRef': userInfo.uid }, 'dislikes').then(res => {
      setLikeStatus(res)
    });
  };

  const onLikeDelete = () => {
    deleteListingTemp('dislikes', likeStatus)
  };

  const onLikeStatusChange = (userInfo) => {
    if (likeStatus) {
      onLikeDelete();
      setLikeStatus(false);
    } else {
      onLikeAdd(userInfo);
    }
  }


  return (
    <div
      className={`btn-ico--dislike btn-ico ${likeStatus ? 'active' : ''}`}
      onClick={() => { onLikeStatusChange(user) }}
    ></div>
  )
}

export default BtnDislike
