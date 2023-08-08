import Tabs from 'pages/cabinet/parts/Tabs';
import SympathyItem from 'pages/cabinet/parts/SympathyItem'

import { useState, useEffect } from 'react'
import { connect } from 'react-redux';
import { getListing } from 'services/getListings';


const Sympathy = ({ account, likeDis }) => {

  const [loading, setLoading] = useState(true);
  const [likes, setLikes] = useState([]);


  useEffect(() => {

    setLoading(true);
    getListing(likeDis, 'rooms', account.uid).then((res) => {
      console.log('res', account.uid, res)
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
          active={3}
        />
        <div className="border-container border-null-top account-main" >
          <div className="main-grid">
            {likes.map((like, index) =>
              <SympathyItem
                key={index}
                like={like}
                likes={likes}
                uid={account.uid}
                setLikes={setLikes}
              />
            )}
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

export default connect(mapStateToProps)(Sympathy);