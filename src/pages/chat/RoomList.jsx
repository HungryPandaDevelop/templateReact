import { useState, useEffect } from 'react';
import { getMyRooms } from 'services/chatEvents';

const RoomList = ({ uid }) => {

  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getMyRooms(uid).then((res) => {
      setListings(res);
      setLoading(false);
    });
  }, [])

  if (loading) { return 'Loading...' }

  return (
    <div>
      <h2>RoomList</h2>
      <div>
        {listings.map((item, index) => (<div key={index}>Room</div>))}
      </div>
    </div>
  )
};

export default RoomList;
