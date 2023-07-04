import RenderForm from 'templates/forms/RenderForm';

import { regFieldsOne } from 'base/forms/regFieldsAll';

import { useNavigate } from 'react-router-dom';

const Reg1 = () => {

  const navigate = useNavigate();

  const submitSuccess = () => {

    navigate('/reg-img/', { replace: true });

  }


  return (
    <div className="popup element-show show" >
      <div className="popup-overlay"></div>
      <div className="popup-container">
        <div className="close-btn close-btn--popup "></div>
        <h3>Заполните анкету</h3>
        <RenderForm
          fields={regFieldsOne}
          btnSubmiText="Регистрация"
          submitSuccess={submitSuccess}
        />
      </div>
    </div>
  )
}

export default Reg1
