import { saveListing } from 'services/saveListing';

import { useState, useEffect } from 'react';

import RenderForm from 'components/forms/RenderForm';

import { getSingleListing } from 'services/getSingleListing';

import { accountFields } from 'base/forms/accountFields';

import { connect } from 'react-redux';

const Cabinet = ({ uid, formData }) => {


  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getSingleListing('users', uid).then(res => {
      setListings(res);
      setLoading(false);
    })
  }, []);

  const submitSuccess = () => {
    console.log('formData', formData.values)
    saveListing(formData.values, uid, 'users');
  }
  if (loading) { return 'Loading...' }

  return (
    <div className="main-full">
      <div className="stub"></div>
      <div className="stub"></div>

      <div className="account-page">
        <div className="main-full">
          <div className="account-tabs-container">
            <div className="account-tab active">Мой аккаунт</div>
            <div className="account-tab search-tab"><i></i><span>Новый ПОИСК</span></div>
          </div>
          <div className="border-container account-main">
            <RenderForm
              fields={accountFields}
              btnSubmiText="Сохранить"
              initialValues={listings}
              submitSuccess={submitSuccess}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {

  return {
    uid: state.account.uid,
    formData: state.form.singleInput,
  }
}

export default connect(mapStateToProps)(Cabinet);