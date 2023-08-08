import { getSingleListing } from 'services/getSingleListing';
import { deleteListingTemp } from 'services/getListings';
import { useState, useEffect } from 'react'
import { renderStatus } from './SympathyItem/renderStatus';
import UserImg from 'pages/users/catalog/UsersItem/UserImg';
import RenderUserBtn from 'pages/cabinet/parts/SympathyItem/RenderUserBtn';


const LikedisItem = ({ like, likes, setLikes, uid }) => {

  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState([]);

  let userSide = uid === like.interlocutors[0] ? true : false;

  useEffect(() => {
    let userLoadId = uid === like.interlocutors[0] ? like.interlocutors[1] : like.interlocutors[0];

    getSingleListing('users', userLoadId).then((getuser) => {

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
      <div className="sympathy-item">
        <div className="img-cover-info">
          <div className="sympathy-img">
            <UserImg user={user} />
          </div>
          <h3>{user.name}</h3>
        </div>
        <div className="btn-container">
          {userSide ? renderStatus(like) : (
            <>
              <RenderUserBtn
                like={like}
                status="agree"
                textBtn="Нравится"
              />
              <RenderUserBtn
                like={like}
                status="disagree"
                textBtn="Не нравится"
              />
            </>
          )}
          <div
            className="btn btn--gray-border"
            onClick={() => { onLikeDelete(like.id) }}
          >Удалить </div></div>
      </div>
    </div>
  )
}

export default LikedisItem