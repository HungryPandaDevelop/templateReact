import RenderForm from 'templates/forms/RenderForm';

import { regFieldsOne } from 'base/forms/regFieldsAll';

import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import Popup from 'templates/Popup';
import Section from "pages/Main/Section"

import { registrationAccount } from 'services/registrationAccount';
const RegMail = ({ formData }) => {

  const navigate = useNavigate();

  const submitSuccess = () => {


    registrationAccount(formData.values).then((res) => {
      console.log('res', res)
      if (!res) { return false };
      navigate('/reg-end/', { replace: true });
    });


  }


  return (
    <>
      <Popup>
        <h3>Заполните анкету</h3>
        <RenderForm
          fields={regFieldsOne}
          btnSubmiText="Регистрация"
          submitSuccess={submitSuccess}
        />
      </Popup>
      <Section />
    </>
  )
}

const mapStateToProps = (state) => {

  return {
    formData: state.form.singleInput,
  }
}

export default connect(mapStateToProps)(RegMail);
