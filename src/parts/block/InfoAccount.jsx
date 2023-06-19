import { connect } from 'react-redux';
import ActionFn from 'store/actions';

import { getAuth } from 'firebase/auth';

const InfoAccount = ({ account }) => {

  const auth = getAuth();

  const onLogOut = () => {
    auth.signOut();
    ActionFn('SET_INFO_ACCOUNT', { uid: false, email: '', infoAccount: [], });
  };

  if (!account.uid) { return false };

  return (
    <div>
      <h3>uid: {account.uid}</h3>
      <h3>email: {account.email} </h3>
      <div
        className="btn btn--blue"
        onClick={onLogOut}
      >Выйти</div>

    </div>
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