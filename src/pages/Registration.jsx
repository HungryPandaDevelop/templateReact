
import RenderForm from 'templates/forms/RenderForm';

import { regFields } from 'base/forms/regFields';

import { useNavigate } from 'react-router-dom';

import { connect } from 'react-redux';

import { registrationAccount } from 'services/registrationAccount';

import GoogleAuth from 'parts/block/GoogleAuth';


const Registration = ({ formData }) => {

  const navigate = useNavigate();

  const submitSuccess = () => {

    registrationAccount(formData.values).then((res) => {
      if (!res) { return false };
      navigate('/cabinet/', { replace: true });
    });


  }



  return (
    <div className="main-full">
      <h1>
        Registration
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
    formData: state.form.singleInput,
  }
}

export default connect(mapStateToProps)(Registration);
