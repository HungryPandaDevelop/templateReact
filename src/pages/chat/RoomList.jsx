import { useState, useEffect } from 'react';
import { getMyRoomsOnline } from 'services/chatEvents';
import { deleteListing } from 'services/getListings';
import { Link } from 'react-router-dom';

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
    <div className='chat-list'>
      {rooms.map((item, index) => (
        <div key={index} className='chat-list-item'>
          <h4>Room: {item.id}</h4>
          <div>
            <Link to={`/cabinet/chat/${item.id}`}
              className="btn btn--yellow"
            >Войти</Link>
            <div
              className="btn btn--blue"
              onClick={() => { onDeleteRoom(item.id) }}
            >delete</div>
          </div>
        </div>
      ))
      }
    </div>
  )
};

export default RoomList;
