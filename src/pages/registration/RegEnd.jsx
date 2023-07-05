
import { Link } from 'react-router-dom';
import Popup from 'templates/Popup';

const RegEnd = () => {

  return (
    <Popup>
      <h3>Поздравляем!<br />Вы успешно создали аккаунт.</h3>
      <h4>Остался последний шаг. Мы отправили вам на почту письмо с подтверждением вашего email</h4>
      <div className="reg-end">
        <h3>Пожалуйста, проверьте.</h3>
        <div><i className="reg-end-ico"></i></div>
      </div>
      <div className="form-btn-container">
        <Link className="btn btn--blue" to="/cabinet">В кабинет</Link>
      </div>
    </Popup>
  )
}

export default RegEnd;
