import { useState, useEffect } from 'react'



import BtnCollections from 'pages/users/btns/BtnCollections';
import BtnSympathy from 'pages/users/btns/BtnSympathy';
import BtnChat from 'pages/users/btns/BtnChat';
import { getListing } from 'services/getListings';


const Btns = ({ user, account }) => {


  const [fav, setFav] = useState([]);
  const [favLoad, setFavLoad] = useState(true);
  const [dislikes, setDislikes] = useState([]);
  const [dislikesLoad, setDislikesLoad] = useState(true);
  const [sympathy, setSympathy] = useState([]);
  const [sympathyLoad, setSympathyLoad] = useState(true);


  useEffect(() => {
    getListing('favorites', 'userRef', account.uid).then((res) => {
      setFav(res);
      setFavLoad(false)
    });
    getListing('dislikes', 'userRef', account.uid).then((res) => {
      setDislikes(res);
      setDislikesLoad(false)
    });
    getListing('sympathy', 'userRef', account.uid).then((res) => {
      setSympathy(res);
      setSympathyLoad(false)
    });
  }, []);


  return (
    <div className="btn-container">
      {!favLoad && <BtnCollections
        user={user}
        account={account}
        collections={fav}
        base='favorites'
        btnClass='favorites'
      />}
      <BtnChat
        user={user}
        account={account}
      />
      {!dislikesLoad && (<BtnCollections
        user={user}
        account={account}
        collections={dislikes}
        base='dislikes'
        btnClass='dislike'
      />)}

      {!sympathyLoad && (<BtnSympathy
        user={user}
        account={account}
        collections={sympathy}
      />)}

    </div>
  )
}

export default Btns