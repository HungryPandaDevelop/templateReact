import { useEffect, useState } from 'react';

import { connect } from 'react-redux';

import { getMyRoomMessages } from 'services/chatEvents';

const Messages = ({ uid, roomId }) => {

  const [allMessages, setAllMessages] = useState([]);

  useEffect(() => {

    getMyRoomMessages(setAllMessages, roomId)
  }, []);

  return (
    <div className=''>
      <h3>Все сообщения</h3>
      <div className="chat-messages-list">
        {allMessages.map((item, index) => {
          return (<div key={index} className='chat-list-item'>{item.text}</div>)
        })}
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