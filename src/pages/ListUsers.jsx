import { useState, useEffect } from 'react'



import { getListing } from 'services/getListings';




import { connect } from 'react-redux';

import UserItem from 'pages/ListUser/UserItem';

const ListUsers = ({ account }) => {

  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);

  const [likes, setLikes] = useState([]);



  useEffect(() => {

    getListing('likes', 'userRef', account.uid).then((res) => {
      setLikes(res);
    });

    getListing('users', 'noUserRef', account.uid).then((res) => {
      setListings(res);
      setLoading(false);
    });

  }, []);

  if (loading) { return 'Loading...' }




  return (
    <>
      <div className="stub"></div>
      <div className="stub"></div>
      <div className="main-full">
        <h1>Пользователи</h1>
      </div>
      <div className="catalog-grid main-grid">
        {listings.map((userInfo, index) => (
          <div key={index} className="col-4">
            <UserItem
              userInfo={userInfo}
              account={account}
              likes={likes}
            />
          </div>
        ))}
      </div>

    </>
  )
}

const mapStateToProps = (state) => {
  // console.log('account.uid', state)
  return {
    account: state.account,
  }
}

export default connect(mapStateToProps)(ListUsers);




  // примеры async
  // const siteWp = 'https://zoo-base.sait.website/wp-json/wp/v2/pages/3';

  // const fetchWp = () => {
  //   return fetch(siteWp)
  //     .then(response => response.json())
  // }
  // const fetchWpAsync = async () => {
  //   const response = await fetch(siteWp);
  //   const dataJs = await response.json()
  //   // console.log('dataJs', dataJs)

  //   return dataJs;
  // }
  // axios.get(`${siteWp}/wp-json/wp/v2/pages/3`).then(res => {

  //   console.log('re', res.data.content.rendered)
  //   setListings(res.data);
  //   setLoading(false);

  // });
  // примеры async