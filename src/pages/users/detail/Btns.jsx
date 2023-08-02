import { useState, useEffect } from 'react'



import BtnLike from 'pages/users/btns/BtnLike';
import BtnDislike from 'pages/users/btns/BtnDislike';
import BtnChat from 'pages/users/btns/BtnChat';
import { getListing } from 'services/getListings';


const Btns = ({ user, account }) => {

  const [loading, setLoading] = useState(true);
  const [likes, setLikes] = useState([]);
  const [dislikes, setDislikes] = useState([]);

  useEffect(() => {
    getListing('likes', 'userRef', account.uid).then((res) => {
      setLikes(res);
    });
    getListing('dislikes', 'userRef', account.uid).then((res) => {
      setDislikes(res);
      setLoading(false);
    });
  }, []);

  if (loading) { return 'Loading...' }

  return (
    <div className="btn-container">
      <BtnLike
        user={user}
        account={account}
        likes={likes}
      />
      <BtnChat
        user={user}
        account={account}
      />
      <BtnDislike
        user={user}
        account={account}
        dislikes={dislikes}
      />
    </div>
  )
}

export default Btns