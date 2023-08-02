import { getSingleListing } from 'services/getSingleListing';
import { deleteListingTemp } from 'services/getListings';
import { useState, useEffect } from 'react'

import UserImg from 'pages/users/catalog/UsersItem/UserImg'
const LikedisItem = ({ like, likes, setLikes }) => {

  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState([]);

  useEffect(() => {

    getSingleListing('users', like.likeUserRef).then((getuser) => {

      setUser(getuser);
      setLoading(false);
    })

  }, []);

  if (loading) { return 'Loading...' }

  const onLikeDelete = (id) => {
    deleteListingTemp('likes', id)
    setLikes(likes.filter(el => el.id !== id))
  };

  return (
    <div className="col-4">
      <div className="likedis-item">
        <div className="img-cover-info">
          <div className="likedis-img">
            <UserImg user={user} />
          </div>
          <h3>{user.name}</h3>
        </div>
        <div className="btn-container">
          <div
            className="btn btn--gray-border"
            onClick={() => { onLikeDelete(like.id) }}
          >Удалить </div></div>
      </div>
    </div>
  )
}

export default LikedisItem