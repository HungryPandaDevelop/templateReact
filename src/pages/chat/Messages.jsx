import { useEffect, useState } from 'react';

import { connect } from 'react-redux';

import { getMyRoomMessages } from 'services/chatEvents';

import MessagesItem from './MessagesItem';

const Messages = ({ uid, roomId }) => {

  const [allMessages, setAllMessages] = useState([]);

  useEffect(() => {

    getMyRoomMessages(setAllMessages, roomId)
  }, []);

  return (
    <div className="chat-messages">
      <div className="messages-container">
        {allMessages.map((message, index) => <MessagesItem
          key={index}
          message={message}
          uid={uid}
        />)}
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {

  return {
    uid: state.account.uid,
  }
}

export default connect(mapStateToProps)(Messages);