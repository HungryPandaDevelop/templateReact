
import { deleteListing } from 'services/getListings';

import RoomItem from 'pages/chat/RoomItem';
import { connect } from 'react-redux';

const RoomList = ({ uid, roomId, setChoiseRoom, setCurrentUser, type, actionFn, rooms }) => {


  const onDeleteRoom = (id) => {
    deleteListing(rooms, 'rooms', id);
  }

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

const mapStateToProps = (state) => {

  return {
    rooms: state.rooms,
  }
}

export default connect(mapStateToProps)(RoomList);