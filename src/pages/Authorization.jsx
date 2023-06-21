import RenderForm from 'templates/forms/RenderForm';

import { regFields } from 'base/forms/regFields';

import { useNavigate } from 'react-router-dom';

import { connect } from 'react-redux';

import { authorizationAccount } from 'services/authorizationAccount';

import GoogleAuth from 'parts/block/GoogleAuth';

const Authorization = ({ formData }) => {

  const navigate = useNavigate();

  const submitSuccess = () => {

    authorizationAccount(formData.values).then((res) => {
      if (!res) { return false };
      navigate('/cabinet/', { replace: true });
    });


  }



  return (
    <div className="main-full">
      <h1>
        Authorization
      </h1>
      <RenderForm
        fields={regFields}
        btnSubmiText="Войти"
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

export default connect(mapStateToProps)(Authorization);
