import { useState, useEffect } from 'react';
import { getMyRoomsOnline } from 'services/chatEvents';
import { deleteListing } from 'services/getListings';

import RoomItem from 'pages/chat/RoomItem';
const RoomList = ({ uid }) => {

  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {

    getMyRoomsOnline(setRooms, uid).then(() => {
      setLoading(false)
    });

  }, []);

  console.log('r', rooms)

  // const onDeleteRoom = (id) => {
  //   console.log('id', id)
  //   deleteListing(rooms, 'messages', id);
  // }

  if (loading) { return 'Loading ...' }
  return (
    <div className='chat-rooms'>
      {rooms.map((room) => <RoomItem room={room} key={room.id} />)}
    </div>
  )
};

export default RoomList;


{/* <div>
<div
  className="btn btn--blue"
  onClick={() => { onDeleteRoom(item.id) }}
>delete</div>
</div> */}