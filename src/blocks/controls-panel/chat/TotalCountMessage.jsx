
import { connect } from 'react-redux';
import { calcUnread } from 'pages/chat/hooks/calcUnread';

const TotalCountMessage = ({ rooms, uid }) => {

  if (calcUnread(rooms, uid) === 0) return false;

  return (
    <span>
      {calcUnread(rooms, uid)}
    </span>
  )
}

const mapStateToProps = (state) => {

  return {
    uid: state.account.uid,
    rooms: state.rooms,
  }
}

export default connect(mapStateToProps)(TotalCountMessage);
