import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import { connect } from 'react-redux';

import ChatForm from 'pages/chat/Form';
import Messages from 'pages/chat/Messages';

import Rooms from 'pages/chat/Rooms';


const Chat = ({ uid }) => {

  const params = useParams();

  return (
    <>
      <div className='main-full'>
        <div className="stub"></div>
        <div className="border-tabs-container">
          <div className="border-tab active">Чат</div>
        </div>

        <div className="border-container border-null-left chat">
          <div className='main-grid'>
            <div className="col-4">
              <Rooms
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