import RenderFields from 'components/forms/RenderFields';

import { reduxForm } from 'redux-form';

import { useState } from 'react';


const UsersSearchPanel = (props) => {

  const {
    fields,
    btnSubmiText,
    waitAnsw,
    submitSuccess
  } = props;

  return (
    <div className="main-full border-search-outer">
      <div className="border-tabs-container">
        <div className="border-tab active">Поиск по людям</div>
        <div className="border-tab">Поиск по отелям</div>
      </div>
      <div className="border-container border-null-left border-container-search">
        <div className="main-grid">
          <RenderFields
            type="single"
            fields={fields.gender}
          />
          <div className="input-box col-4">
            <label>Возраст</label>

          </div>
          <div className="input-box col-3">
            <label>Город</label>
            <select className="style-select" data-text="Выбрать селект">
              <option>селект 1</option>
              <option>селект 2</option>
              <option>селект 3</option>
              <option>селект 4</option>
              <option>селект 5</option>
            </select>
          </div>
          <div className="col-3">
            <div className="btn-container">
              <div className="btn btn--blue-border">Еще фильтры</div>
              <div className="btn btn--blue">Найти</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default reduxForm({
  form: 'usersSearch',
  enableReinitialize: true,
})(UsersSearchPanel);