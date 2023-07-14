import BtnLike from 'pages/users/catalog/UsersItem/BtnLike';
import BtnChat from 'pages/users/catalog/UsersItem/BtnChat';

const Btns = ({ user, account, likes }) => {

  return (
    <div className="btn-container">
      <div className="btn-container-inner">
        <BtnLike
          user={user}
          account={account}
          likes={likes}
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
