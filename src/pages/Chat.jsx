import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import { connect } from 'react-redux';

import ChatForm from 'pages/chat/Form';
import Messages from 'pages/chat/Messages';

import RoomList from 'pages/chat/RoomList';

const Chat = ({ uid }) => {

  const params = useParams();

  return (
    <>
      <div className='main-full'>
        <div className="stub"></div>
        <div className="stub"></div>
        <h1>Чат</h1>
      </div>
      <div className='main-grid'>
        <div className="col-4">
          <RoomList
            uid={uid}
          />
        </div>
        <div className="col-8">
          <div className="chat-messages">
            {params.roomId ? (<>
              <Messages
                roomId={params.roomId}
              />
              <ChatForm
                roomId={params.roomId}
              />
            </>) : ('Выбрать комнату')}
          </div>
        </div>



      </div>
    </>
  )
}


const mapStateToProps = (state) => {
  return {
    uid: state.account.uid,
  }
}

export default connect(mapStateToProps)(Chat);