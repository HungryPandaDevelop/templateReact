import BtnSympathy from 'pages/users/btns/BtnSympathy';
import BtnChat from 'pages/users/btns/BtnChat';

const Btns = ({ user, uid, sympathys }) => {

  return (
    <div className="btn-container">
      <div className="btn-container-inner">
        <BtnSympathy
          user={user}
          uid={uid}
          collections={sympathys}
        />
        <BtnChat
          user={user}
          uid={uid}
        />
      </div>
    </div>
  )
}

export default Btns;
