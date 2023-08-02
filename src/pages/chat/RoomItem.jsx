import { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

import imgStub from 'default/frontend/images/icons/avatar-black.svg'

import { updateRead } from 'services/chatEvents';

import { getSingleListing } from 'services/getSingleListing';

import moment from 'moment';

const RoomItem = ({ room, roomUrl, uid }) => {





  // const invite = room.data.connectUsersUid[0] === uid ? 'he' : 'my';
  const invite = room.data.connectUsersUid[0] === uid ? room.data.connectUsersUid[1] : room.data.connectUsersUid[0];


  const [roomUserInfo, setRoomUserInfo] = useState({});
  const [countUnread, setCountUnread] = useState(0);
  const [loading, setLoading] = useState(true);



  useEffect(() => {
    getSingleListing('users', invite).then(res => {
      console.log('res', res)
      setLoading(false);
      setRoomUserInfo(res);
    });

    let count = 0;
    room.data.messages.map(undread => {
      if (!undread.read && undread.uid !== uid) {
        count++;
      }
    });
    setCountUnread(count);

  }, [room]);

  useEffect(() => {
    if (roomUrl === room.id) {
      updateRead(roomUrl, room, uid);
    }
  }, [roomUrl]);

  const renderImg = (roomUserInfo) => {
    const imgLink = roomUserInfo.imgsAccount && roomUserInfo?.imgsAccount[0];

    const img = imgLink ? imgLink : imgStub;

    return img;
  }

  const getCurrentTime = (roomUserInfo) => {

    let onlineUserTime = moment.unix(roomUserInfo.timestamp.seconds).format("DD.MM.YYYY HH:mm");

    let calcDate = moment() - moment.unix(roomUserInfo.timestamp.seconds);
    let minutes = moment.duration(calcDate).minutes();

    if (minutes < 5) {
      return <div className="rooms-item-online">В сети</div>
    }
    else {
      return <>Был(а) {onlineUserTime}</>
    }

    // var seconds = moment.duration(calcDate).seconds();
    // var hours = Math.trunc(moment.duration(calcDate).asHours());
  }


  if (loading) { return 'Loading...' }

  return (
    <Link
      to={`/cabinet/chat/${room.id}`}
      className={`rooms-item ${roomUrl === room.id ? 'active' : ''}`}

    >
      <div
        className="rooms-item-face img-cover"
        style={{ backgroundImage: `url(${renderImg(roomUserInfo)})` }}
      ></div>

      <div className="rooms-item-name">
        {roomUserInfo.name}
      </div>
      <span className="rooms-item-date">
        {getCurrentTime(roomUserInfo)}
      </span>
      {countUnread !== 0 && (<div className="rooms-item-count">{countUnread}</div>)}
    </Link>
  )
}

export default RoomItem
