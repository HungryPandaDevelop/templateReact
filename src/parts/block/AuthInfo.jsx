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
    // console.log('userInfo render', account)
    const auth = getAuth();

    onAuthStateChanged(auth, (user) => {
      console.log('state user change', user,)
      if (user) {
        console.log('get listing', auth.currentUser.uid)
        // setTimeout(() => {
        getSingleListing('users', auth.currentUser.uid).then(res => {
          console.log('get listing', res)
          ActionFn('SET_INFO_ACCOUNT', { ...res });
        });
        // }, 1000);



      }
      else {
        ActionFn('SET_INFO_ACCOUNT', { uid: false });
      }
    });



  }, []);
  // }, [account.uid]);

  return (
    <>
      <div>AuthInfo: {(account.uid ? 'Logged: ' + account.uid : 'No Logged')}</div>
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