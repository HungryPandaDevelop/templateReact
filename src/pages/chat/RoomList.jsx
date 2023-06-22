import { useState, useEffect } from 'react';
import { getMyRoomsOnline } from 'services/chatEvents';
import { deleteListing } from 'services/getListings';

const RoomList = ({ uid }) => {

  const [rooms, setRooms] = useState([]);

  useEffect(() => {

    getMyRoomsOnline(setRooms, uid);

  }, []);

  console.log('r', rooms)

  const onDeleteRoom = (id) => {
    console.log('id', id)
    deleteListing(rooms, 'messages', id);
  }

  return (
    <div>
      <h2>RoomList</h2>
      <div>
        {rooms.map((item, index) => (
          <div key={index}>
            <h4>Room: {item.id}</h4>
            <div
              className="btn btn--blue"
              onClick={() => { onDeleteRoom(item.id) }}
            >delete</div>
          </div>
        ))
        }
      </div>
    </div>
  )
};

export default RoomList;
