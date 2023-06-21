import { useState, useEffect } from 'react'

import { getListing } from 'services/getListings';

import { createRoom } from 'services/chatEvents';

import { connect } from 'react-redux';

const ListUsers = ({ account }) => {

  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getListing('users').then((res) => {
      setListings(res);
      setLoading(false);
    });
  }, [])

  if (loading) { return 'Loading...' }


  const onInviteChat = (userInfo) => {

    createRoom([account, userInfo], account.uid).then(res => {
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

  return {
    account: state.account,
  }
}

export default connect(mapStateToProps)(ListUsers);