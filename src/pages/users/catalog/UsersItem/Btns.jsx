import BtnCollections from 'pages/users/btns/BtnCollections';
import BtnChat from 'pages/users/btns/BtnChat';

const Btns = ({ user, account, likes }) => {

  return (
    <div className="btn-container">
      <div className="btn-container-inner">
        <BtnCollections
          user={user}
          account={account}
          likes={likes}
          base='favorites'
        />
        <BtnChat
          user={user}
          account={account}
        />
      </div>
    </div>
  )
}

export default Btns;
