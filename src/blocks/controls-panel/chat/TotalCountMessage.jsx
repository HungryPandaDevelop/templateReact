
import { connect } from 'react-redux';

const TotalCountMessage = ({ unreadChatCount }) => {

  if (unreadChatCount === 0) return false;

  return (
    <span>
      {unreadChatCount}
    </span>
  )
}

const mapStateToProps = (state) => {

  return {
    unreadChatCount: state.unreadChatCount
  }
}

export default connect(mapStateToProps)(TotalCountMessage);
