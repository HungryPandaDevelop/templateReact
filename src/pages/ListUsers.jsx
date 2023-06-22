import { useState, useEffect } from 'react'

import { getListing } from 'services/getListings';

import { createRoom } from 'services/chatEvents';

import { connect } from 'react-redux';

const ListUsers = ({ account }) => {

  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    getListing('users', 'noUserRef', account.uid).then((res) => {
      setListings(res);
      setLoading(false);
    });

  }, [])

  if (loading) { return 'Loading...' }


  const onInviteChat = (userInfo) => {

    createRoom({ 'my': account, 'he': userInfo }, account.uid).then(res => {
      console.log('invite res', res)
    });
  }

  const UserItem = ({ userInfo }) => {

    return (
      <div>
        <div>mail: {userInfo.email}</div>
        <div>
          <div className="btn btn--blue">Like</div>
          <div
            className="btn btn--yellow"
            onClick={() => { onInviteChat(userInfo) }}
          >Chat</div>
        </div>
      </div>
    )
  }

  return (
    <div>
      <h1>ListUsers</h1>
      {listings.map((userInfo, index) => (<div key={index}><UserItem userInfo={userInfo} /></div>))}
    </div>
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