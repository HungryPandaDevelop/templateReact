import Tabs from 'pages/cabinet/default/Tabs';
import LikedisItem from 'pages/cabinet/default/LikedisItem'

import { useState, useEffect } from 'react'
import { connect } from 'react-redux';
import { getListing } from 'services/getListings';


const LikeDis = ({ account, likeDis }) => {

  const [loading, setLoading] = useState(true);
  const [likes, setLikes] = useState([]);


  useEffect(() => {

    setLoading(true);
    getListing(likeDis, 'userRef', account.uid).then((res) => {
      setLikes(res);
      setLoading(false);
    });

  }, [likeDis]);

  if (loading) { return 'Loading...' };

  return (
    <>
      <div className="stub"></div>
      <div className="main-full">
        <Tabs
          active={likeDis === 'likes' ? 3 : 4}
        />
        <div className="border-container border-null-top account-main" >
          <div className="main-grid">
            {likes.map((like, index) => (
              <LikedisItem
                key={index}
                like={like}
                likes={likes}
                setLikes={setLikes}
              />))}
          </div>

        </div>
      </div>
    </>
  )
}


const mapStateToProps = (state) => {

  return {
    account: state.account,
  }
}

export default connect(mapStateToProps)(LikeDis);