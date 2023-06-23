import { useState, useEffect } from 'react';

import { createRoom } from 'services/chatEvents';

import { useNavigate, Link } from 'react-router-dom';

import { addCardsDefault } from 'services/addListing';

import { deleteListingTemp } from 'services/getListings';

const UserItem = ({ account, userInfo, likes }) => {

  const navigate = useNavigate();

  const [likeStatus, setLikeStatus] = useState(false);


  useEffect(() => {

    likes.map(like => {
      if (userInfo.uid === like.likeUserRef) {
        setLikeStatus(like.id);
      };
    });

  }, []);

  const onInviteChat = (userInfo) => {
    createRoom({ 'my': account, 'he': userInfo }, account.uid).then(res => {
      navigate('/cabinet/chat/' + res, { replace: true });
    });
  };


  const onLikeAdd = (userInfo) => {
    addCardsDefault({ 'userRef': account.uid, 'likeUserRef': userInfo.uid }, 'likes').then(res => {
      console.log('re', res)
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


  return (
    <>
      <div className="user-item">
        <div className="user-item-img" >
          <div className="img-cover" >
            {/* <img src="/images/temp/avatar-1.jpg" alt="" /> */}
          </div>
          {/* <div class="logo-company">
            <img src="/images/temp/logo-color/1.svg" alt="" />
          </div> */}
          <div className="user-item-tags">
            <div className="user-item-tag">
              <i className="bokal-ico"></i>
            </div>
            <div className="user-item-tag">
              <i className="padushka-ico"></i>
            </div>
            <div className="user-item-tag">
              <i className="plag-ico"></i>
            </div>
            <div className="user-item-tag">
              <i className="pribor-ico"></i>
            </div>
          </div>
          <div className="user-item-info">
            <h3>{userInfo.email}</h3>
            <div className="btn-container-adv">
              <div
                className={`btn-adv-like ${likeStatus ? 'active' : ''}`}
                onClick={() => { onLikeStatusChange(userInfo) }}
              ></div>
              <div
                className="btn-adv-message"
                onClick={() => { onInviteChat(userInfo) }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default UserItem
