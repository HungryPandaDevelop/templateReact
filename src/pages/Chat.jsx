import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import { connect } from 'react-redux';


import RoomList from 'pages/chat/RoomList';

const Chat = ({ uid }) => {
  return (
    <div>
      <h1>Chat</h1>
      <RoomList
        uid={uid}
      />
    </div>
  )
}


const mapStateToProps = (state) => {
  return {
    uid: state.account.uid,
  }
}

export default connect(mapStateToProps)(Chat);