import { connect } from 'react-redux';
import ActionFn from 'store/actions';
import { Link } from 'react-router-dom';
import { getAuth } from 'firebase/auth';

const InfoAccount = ({ account }) => {

  const auth = getAuth();

  const onLogOut = () => {
    auth.signOut();
    ActionFn('SET_INFO_ACCOUNT', { uid: false, email: '', infoAccount: [], });
  };

  // if (!account.uid) { return false };

  return (
    <>
      {/* <h3>uid: {account.uid}</h3>
      <h3>email: {account.email} </h3> */}

      {account.uid ? (
        <>
          <Link to="/cabinet/chat" className="btn btn-out btn--white">Чат</Link>
          <Link to="/cabinet" className="btn btn-out btn--white">Кабинет</Link>
          <div
            className="btn btn--white"
            onClick={onLogOut}
          >Выйти</div>
        </>) : (<><Link to="/authorization" className="btn btn-out btn--white">Войти</Link></>)}

    </>
  )
};


const mapStateToProps = (state) => {

  return {
    account: state.account
  }
}

export default connect(mapStateToProps,
  {
    ActionFn
  })(InfoAccount);