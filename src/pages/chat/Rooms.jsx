import { useState, useEffect } from 'react';
import { getMyRoomsOnline } from 'services/chatEvents';
import { deleteListing } from 'services/getListings';
import actionFn from 'store/actions/index';
import RoomItem from 'pages/chat/RoomItem';
import { connect } from 'react-redux';

const RoomList = ({ uid, roomId, setChoiseRoom, setCurrentUser, type, actionFn }) => {


  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    rooms && getMyRoomsOnline(setRooms, uid).then((res) => {
      setLoading(false)
    });

  }, []);

  const calcUnread = (rooms) => {
    let count = 0;
    rooms.map(room => {
      room.data.messages.map(message => {
        if (!message.read) {
          count++;
        }
      })
    })
    return count;
  }

  useEffect(() => {
    actionFn('SET_COUNT_UNREAD', calcUnread(rooms));
  }, [rooms])

  const onDeleteRoom = (id) => {
    deleteListing(rooms, 'rooms', id);
  }



  if (loading) { return 'Loading ...' }
  return (
    <div className='chat-rooms'>
      {rooms.map((room) => <RoomItem
        room={room}
        key={room.id}
        roomUrl={roomId}
        uid={uid}
        type={type}
        onDeleteRoom={onDeleteRoom}
        setChoiseRoom={setChoiseRoom}
        setCurrentUser={setCurrentUser}
      />)}
    </div>
  )
};


export default connect(null, { actionFn })(RoomList);