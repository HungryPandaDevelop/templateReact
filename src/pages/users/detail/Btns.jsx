import { useState, useEffect } from 'react'



import BtnCollections from 'pages/users/btns/BtnCollections';
import BtnSympathy from 'pages/users/btns/BtnSympathy';
import BtnChat from 'pages/users/btns/BtnChat';
import { getListing } from 'services/getListings';


const Btns = ({ user, uid, sympathys }) => {


  const [fav, setFav] = useState([]);
  const [favLoad, setFavLoad] = useState(true);
  const [dislikes, setDislikes] = useState([]);
  const [dislikesLoad, setDislikesLoad] = useState(true);



  useEffect(() => {
    getListing('favorites', 'userRef', uid).then((res) => {
      setFav(res);
      setFavLoad(false)
    });
    getListing('dislikes', 'userRef', uid).then((res) => {
      setDislikes(res);
      setDislikesLoad(false)
    });

  }, []);


  return (
    <div className="btn-container">
      {!favLoad && <BtnCollections
        user={user}
        uid={uid}
        collections={fav}
        base='favorites'
        btnClass='favorites'
      />}
      <BtnChat
        user={user}
        uid={uid}
      />
      {!dislikesLoad && (<BtnCollections
        user={user}
        uid={uid}
        collections={dislikes}
        base='dislikes'
        btnClass='dislike'
      />)}

      {(<BtnSympathy
        user={user}
        uid={uid}
        collections={sympathys}
      />)}

    </div>
  )
}

export default Btns