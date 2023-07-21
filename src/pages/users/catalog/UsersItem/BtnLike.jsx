import { useState, useEffect } from 'react';

import { addCardsDefault } from 'services/addListing';

import { deleteListingTemp } from 'services/getListings';

const BtnLike = ({ user, account, likes }) => {

  const [likeStatus, setLikeStatus] = useState(false);


  useEffect(() => {

    likes.map((like) => {
      if (user.uid === like.likeUserRef) {
        setLikeStatus(like.id);
      };
    });

  }, []);

  const onLikeAdd = (userInfo) => {
    addCardsDefault({ 'userRef': account.uid, 'likeUserRef': userInfo.uid }, 'likes').then(res => {
      setLikeStatus(res)
    });
  };

  const onLikeDelete = () => {
    deleteListingTemp('likes', likeStatus)
  };

  const onLikeStatusChange = (userInfo) => {
    if (likeStatus) {
      onLikeDelete();
      setLikeStatus(false);
    } else {
      onLikeAdd(userInfo);
    }
  }

  console.log('likeStatus', likeStatus)

  return (
    <div
      className={`btn-ico--like btn-ico ${likeStatus ? 'active' : ''}`}
      onClick={() => { onLikeStatusChange(user) }}
    ></div>
  )
}

export default BtnLike
