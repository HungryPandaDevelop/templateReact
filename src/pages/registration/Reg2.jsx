import RenderForm from 'templates/forms/RenderForm';

import { regFieldsSecond } from 'base/forms/regFieldsAll';

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
        <div className="close-btn close-btn--popup"></div>
        <div className="link--back"><i> </i><span>Назад</span></div>
        <h3>Загрузите ваши фотографии</h3>
        <h4>Вы можете загрузить до 10 фотографий </h4>
        <RenderForm
          fields={regFieldsSecond}
          btnSubmiText="Регистрация"
          submitSuccess={submitSuccess}
        />
      </div>
    </div>
  )
}

export default Reg1
