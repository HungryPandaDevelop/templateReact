import { saveListing } from 'services/saveListing';

import { useState, useEffect } from 'react';

import SettingTabs from 'pages/cabinet/settings/SettingTabs';
import RenderForm from 'components/forms/RenderFormCabinet';

import { getSingleListing } from 'services/getSingleListing';

import { accountFields } from 'base/forms/accountFields';

import { connect } from 'react-redux';



import Tabs from 'pages/cabinet/parts/Tabs';

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
    <>
      <div className="stub"></div>
      <div className="main-full">
        <Tabs active={1} />
        <SettingTabs />
      </div>
    </>
  )
}

const mapStateToProps = (state) => {

  return {
    uid: state.account.uid,
    formData: state.form.singleInput,
  }
}

export default connect(mapStateToProps)(Cabinet);

