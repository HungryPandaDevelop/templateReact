import { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

import imgStub from 'default/frontend/images/icons/avatar-black.svg'

import { updateRead } from 'services/chatEvents';

const RoomItem = ({ room, roomUrl, uid }) => {

  const imgLink = room.data.connectUsers.he?.imgsAccount

  const img = imgLink ? imgLink[0] : imgStub;

  const [countUnread, setCountUnread] = useState(0);

  useEffect(() => {

    let count = 0;
    room.data.messages.map(undread => {
      if (!undread.read && undread.uid === uid) {
        count++;
      }
    });
    setCountUnread(count);

  }, [room]);

  useEffect(() => {

    updateRead(roomUrl, room.data.messages)
  }, [])

  return (
    <Link
      to={`/cabinet/chat/${room.id}`}
      className={`rooms-item ${roomUrl === room.id ? 'active' : ''}`}

    >
      <div
        className="rooms-item-face img-cover"
        style={{ backgroundImage: `url(${img})` }}
      ></div>
      <div className="rooms-item-name">{room.data.connectUsers.he.name}</div>
      {/* <span className="rooms-item-date">16.06.2023</span> */}
      {countUnread !== 0 && (<div className="rooms-item-count">{countUnread}</div>)}
    </Link>
  )
}

export default RoomItem
