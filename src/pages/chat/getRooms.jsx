import { useEffect } from "react"
import { getMyRoomsOnline } from 'services/chatEvents';
import { getMySympathyOnline } from 'services/chatEvents';

import { connect } from 'react-redux';
import actionFn from 'store/actions/index';

const GetRooms = ({ uid, actionFn }) => {


  const setRoomOut = (rooms) => {
    actionFn('SET_ROOMS', rooms);
  }
  const setSympathyOut = (rooms) => {
    actionFn('SET_SYMPATHY', rooms);
  }

  useEffect(() => {

    // getMyRoomsOnline(setRoomOut, uid);
    getMySympathyOnline(setSympathyOut, uid);


  }, []);


}

const mapStateToProps = (state) => {

  return {
    uid: state.account.uid,
  }
}


export default connect(mapStateToProps, { actionFn })(GetRooms);