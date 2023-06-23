
import RenderForm from 'templates/forms/RenderForm';

import { regFields } from 'base/forms/regFields';

import { useNavigate, Navigate } from 'react-router-dom';

import { connect } from 'react-redux';

import { registrationAccount } from 'services/registrationAccount';


import GoogleAuth from 'parts/block/GoogleAuth';




const Registration = ({ formData, uid }) => {

  const navigate = useNavigate();

  const submitSuccess = () => {

    registrationAccount(formData.values).then((res) => {
      if (!res) { return false };
      navigate('/cabinet/', { replace: true });
    });


  }

  if (uid) return <Navigate to='/cabinet' />

  return (
    <div className="main-full">
      <div className="stub"></div>
      <div className="stub"></div>
      <h1>
        Регистраиця
      </h1>
      <RenderForm
        fields={regFields}
        btnSubmiText="Регистрация"
        submitSuccess={submitSuccess}
      />
      <GoogleAuth />
    </div>
  )
}


const mapStateToProps = (state) => {

  return {
    uid: state.account.uid,
    formData: state.form.singleInput,
  }
}

export default connect(mapStateToProps)(Registration);
