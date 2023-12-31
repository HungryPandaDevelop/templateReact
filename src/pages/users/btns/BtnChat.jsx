import { useNavigate } from 'react-router-dom';
import { createRoom } from 'services/chatEvents';

const BtnChat = ({ user, uid }) => {

  const navigate = useNavigate();

  const onInviteChat = (user) => {
    console.log(user.uid)
    createRoom(uid, user.uid).then(res => {
      navigate('/cabinet/chat/' + res, { replace: true });
    });
  };


  return (
    <div
      className="btn-ico--chat btn-ico"
      onClick={() => { onInviteChat(user) }}
    ></div>
  )
}

export default BtnChat
