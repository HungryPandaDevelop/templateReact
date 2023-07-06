
import { Link } from 'react-router-dom';
import Popup from 'components/Popup';
import Section from "pages/Main/Section"

import GoogleAuth from 'pages/auth/parts/GoogleAuth';

const RegStart = () => {

  return (
    <>
      <Popup>
        <h3>Знакомься в отелях и бронируй номера с кем тебе по душе!</h3>
        <h4>Нажимая "Создать", вы принимаете наши <a href="#">Условия.</a>Чтобы узнать, как мы обрабатываем ваши данные, ознакомьтесь с нашей <a href="#">Политика конфиденциальности</a>и <a href="#">Политика в отношении файлов Cookie.</a></h4>
        <h4>Создайте аккаунт с помощью:</h4>
        <div className="btn-container">
          <GoogleAuth btnText="Создать через Gmail" />
          <Link to="/reg-phone" className="btn reg-btn phone--btn"><i></i><span>Создать через номер телефона</span></Link>
          <Link to="/reg-mail" className="btn reg-btn mail--btn"><i></i><span>Создать через почту</span></Link>
        </div>
      </Popup>
      <Section />
    </>
  )
}

export default RegStart;
