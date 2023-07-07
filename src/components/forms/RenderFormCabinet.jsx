import RenderFields from 'components/forms/RenderFields';

import { reduxForm } from 'redux-form';

import { useState } from 'react';

// --------------------------------------------------------------------

const TemplateForm = (props) => {
  const {
    fields,
    btnSubmiText,
    waitAnsw,
    submitSuccess
  } = props;


  const [checkErrorSubmit, setCheckErrorSubmit] = useState(false);
  const [errCheck, setErrCheck] = useState(true);


  const onSubmit = (e) => {
    e.preventDefault();

    console.log('sub form')

    setCheckErrorSubmit(true);

    setTimeout(() => {
      setCheckErrorSubmit(false);
    }, 10000);


    if (errCheck) {
      submitSuccess();
    } else {
      console.log('Ошибка полей')
    }


  };


  return (
    <form>
      <div className="border-container border-null-left account-main">
        <div className="main-grid">
          <div className="col-8">
            <div className="user-top-info">
              <RenderFields
                type="single"
                fields={fields.name}
                checkErrorSubmit={checkErrorSubmit}
                setErrCheck={setErrCheck}
              />
              <RenderFields
                type="single"
                fields={fields.dateBerth}
                checkErrorSubmit={checkErrorSubmit}
                setErrCheck={setErrCheck}
              />
              <RenderFields
                type="single"
                fields={fields.gender}
              />
            </div>
            <RenderFields
              type="single"
              fields={fields.goals}
            />
            <RenderFields
              type="single"
              fields={fields.currentLocation}
            />
          </div>
          <div className="col-4">
            <div className="input-box">
              <div className="dragdrop-container">  <span>Выбрать фото</span></div>
            </div>
          </div>
          <div className="col-12">
            <div className="border-delimetr border-account"></div>
          </div>
          <div className="col-8">
            <div className="tags-add-container">
              <div className="tags-container">
                <h3>Интересы:</h3><a className="tag" href="#"> <span> Рестораны</span><em></em></a><a className="tag" href="#"> <span> Театр</span><em></em></a><a className="tag" href="#"> <span> Фитнес</span><em></em></a><a className="tag" href="#"> <span> Юмор</span><em></em></a><a className="tag" href="#"> <span> Цветы</span><em></em></a><a className="tag" href="#"> <span> Астрология</span><em></em></a><a className="tag" href="#"> <span> Кино</span><em></em></a><a className="tag" href="#"> <span> Спорткары</span><em></em></a><a className="tag" href="#"> <span> Танцы</span><em></em></a>
              </div>
              <div className="tags-add-input">
                <div className="tags-add-hint">
                  <h3>Добавьте ваши цели.</h3>
                  <div className="tags-add-hint-text">
                    Данные цели будут использоваться,
                    как приглашения, для большего
                    совпадения пар.
                  </div>
                </div>
                <div className="input-box">
                  <input className="input-decorate require" type="text" placeholder="Text" />
                </div><a className="btn btn--blue-border" href="#">Добавить</a>
              </div>
            </div>
          </div>
          <div className="col-4">
            <h3></h3>
            <div className="personal-info">
              <ul className="ln">
                <li>
                  <div className="personal-info-name"><i className="portfel-ico"></i><b>Работа:</b></div>
                  <div className="personal-info-value">
                    <select className="style-select" data-text="Выберете">
                      <option>селект 1</option>
                      <option>селект 2</option>
                      <option>селект 3</option>
                      <option>селект 4</option>
                      <option>селект 5</option>
                    </select>
                  </div>
                </li>
                <li>
                  <div className="personal-info-name"><i className="zodiak-ico"></i><b>Зодиак:</b></div>
                  <div className="personal-info-value">
                    <select className="style-select" data-text="Выберете">
                      <option>селект 1</option>
                      <option>селект 2</option>
                      <option>селект 3</option>
                      <option>селект 4</option>
                      <option>селект 5</option>
                    </select>
                  </div>
                </li>
                <li>
                  <div className="personal-info-name"><i className="celi-ico"></i><b>Цель поездки:</b></div>
                  <div className="personal-info-value">
                    <select className="style-select" data-text="Выберете">
                      <option>селект 1</option>
                      <option>селект 2</option>
                      <option>селект 3</option>
                      <option>селект 4</option>
                      <option>селект 5</option>
                    </select>
                  </div>
                </li>
                <li>
                  <div className="personal-info-name"><i className="orientacia-ico"></i><b>Ориентация:</b></div>
                  <div className="personal-info-value">
                    <select className="style-select" data-text="Выберете">
                      <option>селект 1</option>
                      <option>селект 2</option>
                      <option>селект 3</option>
                      <option>селект 4</option>
                      <option>селект 5</option>
                    </select>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12">
            <div className="user-description">
              <h3>О себе:</h3>
              <div className="input-box">
                <textarea className="input-decorate" placeholder="Расскажите о себе ..."></textarea>
              </div>
              <div className="btn-container"> <a className="btn btn--blue-border" href="#">Сохранить</a></div>
            </div>
          </div>
        </div>
      </div>
      {/* <RenderFields
        fields={fields}
        checkErrorSubmit={checkErrorSubmit}
        setErrCheck={setErrCheck}
      /> */}
      <div className="col-12 btn-container">
        <button className="btn btn--blue" onClick={(e) => { onSubmit(e) }} >
          {waitAnsw ? (<>Loading...</>) : (
            <><i></i><span>{btnSubmiText}</span></>
          )}
        </button>
      </div>
    </form >
  )
}



export default reduxForm({
  form: 'singleInput',
  enableReinitialize: true,
})(TemplateForm);


