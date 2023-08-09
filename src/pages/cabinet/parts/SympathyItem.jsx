import { getSingleListing } from 'services/getSingleListing';
import { useState, useEffect } from 'react'
import { renderStatus } from './SympathyItem/renderStatus';
import UserImg from 'pages/users/catalog/UsersItem/UserImg';
import RenderUserBtn from 'pages/cabinet/parts/SympathyItem/RenderUserBtn';
import { deleteListingTemp } from 'services/getListings';

const LikedisItem = ({
  sympathy,
  sympathys,
  uid
}) => {

  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState([]);

  let userSide = uid === sympathy.interlocutors[0] ? true : false;

  useEffect(() => {



    let userLoadId = uid === sympathy.interlocutors[0] ? sympathy.interlocutors[1] : sympathy.interlocutors[0];

    getSingleListing('users', userLoadId).then((getuser) => {

      setUser(getuser);
      setLoading(false);
    });


  }, []);

  if (loading) { return 'Loading...' }

  const onDelete = (id) => {
    console.log('id', id)
    deleteListingTemp('sympathy', id);
  }




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
          {userSide ? renderStatus(sympathy) : (
            <>
              <div className="sympathy-hint">
                Ваш ответ на симпатию
              </div>
              <RenderUserBtn
                sympathy={sympathy}
                status="see"
                textBtn="Оцениваю"
              />
              <RenderUserBtn
                sympathy={sympathy}
                status="agree"
                textBtn="Нравится"
              />
              <RenderUserBtn
                sympathy={sympathy}
                status="disagree"
                textBtn="Не нравится"
              />
            </>
          )}
          <div
            className="sympathy-btn trash-sympathy-btn"
            onClick={() => { onDelete(sympathy.id) }}
            title="С глаз долой"
          ></div>
        </div>
      </div>
    </div>
  )
}

export default LikedisItem