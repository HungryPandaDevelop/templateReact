import RenderForm from 'templates/forms/RenderForm';

import { regFields } from 'base/forms/regFields';

import { useNavigate, Navigate } from 'react-router-dom';

import { connect } from 'react-redux';

import { authorizationAccount } from 'services/authorizationAccount';


const Authorization = ({ formData, uid }) => {

  const navigate = useNavigate();

  const submitSuccess = () => {

    authorizationAccount(formData.values).then((res) => {
      if (!res) { return false };
      navigate('/cabinet/', { replace: true });
    });

  };


  if (uid) return <Navigate to='/cabinet' />

  return (
    <div className="main-full">
      <div className="stub"></div>
      <div className="stub"></div>
      <h1>
        Авторизация
      </h1>
      <RenderForm
        fields={regFields}
        btnSubmiText="Войти"
        submitSuccess={submitSuccess}
      />

    </div>
  )
}


const mapStateToProps = (state) => {

  return {
    uid: state.account.uid,
    formData: state.form.singleInput,
  }
}

export default connect(mapStateToProps)(Authorization);
