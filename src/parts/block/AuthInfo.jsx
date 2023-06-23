import { useEffect } from 'react';

import { getAuth, onAuthStateChanged } from 'firebase/auth';

import { connect } from 'react-redux';
import ActionFn from 'store/actions';

import { getSingleListing } from 'services/getSingleListing';

const AuthInfo = ({
  ActionFn,
  account,
}) => {

  useEffect(() => {

    const auth = getAuth();

    onAuthStateChanged(auth, (user) => {

      if (user) {
        // setTimeout(() => {
        getSingleListing('users', auth.currentUser.uid).then(res => {

          localStorage.setItem('account', JSON.stringify(res));
          ActionFn('SET_INFO_ACCOUNT', { ...res });
        });
        // }, 1000);
      }
      else {
        localStorage.removeItem('account');
        ActionFn('SET_INFO_ACCOUNT', { uid: false, email: '', });
      };
    });



  }, []);
  // }, [account.uid]);

  return (
    <>
      {/* <div>AuthInfo: {(account.uid ? 'Logged: ' + account.uid : 'No Logged')}</div> */}
    </>
  )
}

const mapStateToProps = (state) => {

  return {
    account: state.account
  }
}

export default connect(mapStateToProps,
  {
    ActionFn
  })(AuthInfo);