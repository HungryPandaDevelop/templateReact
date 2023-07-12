import { useEffect } from 'react';

import { getAuth, onAuthStateChanged } from 'firebase/auth';

import { connect } from 'react-redux';
import ActionFn from 'store/actions';

const CheckAuth = ({
  ActionFn
}) => {

  const auth = getAuth();

  useEffect(() => {

    onAuthStateChanged(auth, (user) => {

      if (user) {

        localStorage.setItem('account', JSON.stringify({ uid: auth.currentUser.uid }));
        ActionFn('SET_INFO_ACCOUNT', { uid: auth.currentUser.uid });
      }
      else {
        localStorage.removeItem('account');
        ActionFn('SET_INFO_ACCOUNT', { uid: false, email: '', });
      };
    });



  }, []);

  return (
    <>
      {/* <div>AuthInfo: {(account.uid ? 'Logged: ' + account.uid : 'No Logged')}</div> */}
    </>
  )
}



export default connect(null,
  {
    ActionFn
  })(CheckAuth);