import { saveListing } from 'services/saveListing';

import { useState, useEffect } from 'react';

import RenderForm from 'components/forms/RenderFormUsersSearch';

import { getSingleListing } from 'services/getSingleListing';

import { usersSearchFields } from 'base/forms/usersSearchFields';

import { connect } from 'react-redux';

const UsersSearchPanel = ({ uid, formData }) => {



  useEffect(() => {

  }, []);

  const submitSuccess = () => {


  }
  return (
    <>
      <RenderForm
        fields={usersSearchFields}
        btnSubmiText="Найти"
        submitSuccess={submitSuccess}
      />
    </>
  )
}

const mapStateToProps = (state) => {

  return {
    formData: state.form.usersSearch,
  }
}

export default connect(mapStateToProps)(UsersSearchPanel);

