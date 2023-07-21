import { Link } from 'react-router-dom';

import imgStub from 'default/frontend/images/icons/avatar-black.svg'

const RoomItem = ({ room }) => {

  const imgLink = room.data.connectUsers.he?.imgsAccount

  const img = imgLink ? imgLink[0] : imgStub;

  return (
    <Link to={`/cabinet/chat/${room.id}`} className='rooms-item'>
      <div
        className="rooms-item-face img-cover"
        style={{ backgroundImage: `url(${img})` }}
      ></div>
      <div className="rooms-item-name">{room.data.connectUsers.he.name}</div>
      {/* <span className="rooms-item-date">16.06.2023</span> */}
      {/* <div className="rooms-item-count">3</div> */}
    </Link>
  )
}

export default RoomItem
