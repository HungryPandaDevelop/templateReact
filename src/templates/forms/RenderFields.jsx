import React from 'react';



import RenderTitle from './fields/RenderTitle';

import RenderInputText from './fields/RenderInputText'; // поле стандартное

import RenderInputDate from './fields/RenderInputDate'; // дата

import RenderInputPhone from './fields/RenderInputPhone'; // телефон

import RenderInputPassword from './fields/RenderInputPassword'; // пароля

import RenderInputTextarea from './fields/RenderInputTextarea'; // область текста

import RenderInputCheckbox from './fields/RenderInputCheckbox';  // чекбокс

import RenderInputRadio from './fields/RenderInputRadio';  // radio

import RenderInputSelect from './fields/RenderInputSelect'; // селект

// import RenderInputFile from './fields/RenderInputFile'; // файл

// import RenderInputFileDropZone from './fields/RenderInputFileDropZone'; // зона файлов

// import RenderInputFileVideo from './fields/RenderInputFileVideo'; // видео

// import RenderInputFilePhoto from './fields/RenderInputFilePhoto'; // фото



import RenderInputStar from './fields/RenderInputStar'; // звезды отзыв

import RenderInputSwitch from './fields/RenderInputSwitch'; // поле переключателя

import RenderInputMulty from './fields/RenderInputMulty'; // поле селект + текст

import RenderInputComplex from './fields/RenderInputComplex'; // комлекс

import RenderInputCoords from './fields/RenderInputCoords'; // координаты

import RenderInputCity from './fields/RenderInputCity'; // выбор города


import { required, minLength, mailCheck } from 'templates/forms/validator';

const RenderFields = ({ fields, checkErrorSubmit, setErrCheck, }) => {

  const setValidate = (validate) => {
    let validateArr = [];

    validate && validate.map((item) => {
      if (item === 'required') { validateArr.push(required); }
      else if (item === 'minLength') { validateArr.push(minLength); }
      else if (item === 'mailCheck') { validateArr.push(mailCheck); }
    });

    return validateArr;
  }



  const choiseFieldType = (obj, index) => {
    console.log(obj)
    switch (obj.type) {
      case 'title':
        return (
          <>
            <RenderTitle
              obj={obj}
            />
          </>
        )
      case 'text':
        return (
          <>
            <RenderInputText
              obj={obj}
            />
          </>
        );
      case 'textarea':
        return (
          <RenderInputTextarea
            obj={obj}
          />
        );
      case 'phone':
        return (
          <RenderInputPhone
            name={obj.name}
            placeholder={obj.placeholder}
            label={obj.label}
            labelSecond={obj.labelSecond}
            disabled={obj.disabled}
            num={index}
            className={obj.wrapClass}
          />
        );
      case 'select':
        return (
          <RenderInputSelect
            name={obj.name}
            label={obj.label}
            labelSecond={obj.labelSecond}
            placeholder={obj.placeholder}
            options={obj.options}
            num={index}
            hideByClickId={obj.hideByClickId}
            className={obj.wrapClass}
          />
        );
      case 'date':
        return (
          <RenderInputDate
            name={obj.name}
            placeholder={obj.placeholder}
            label={obj.label}
            labelSecond={obj.labelSecond}
            num={index}
            view={obj.view}
            className={obj.wrapClass}
            hideByClickId={obj.hideByClickId}
          />
        );
      case 'password':
        return (
          <RenderInputPassword
            obj={obj}
            num={index}
            checkErrorSubmit={checkErrorSubmit}
            setErrCheck={setErrCheck}

          />
        );

      case 'checkbox':
        return (<RenderInputCheckbox
          name={obj.name}
          label={obj.label}
          labelSecond={obj.labelSecond}
          options={obj.options}
          num={index}
          hideByClickId={obj.hideByClickId}
          className={obj.wrapClass}
        />)
      case 'radio':
        return (
          <RenderInputRadio
            name={obj.name}
            label={obj.label}
            labelSecond={obj.labelSecond}
            options={obj.options}
            num={index}
            hideByClickId={obj.hideByClickId}
            className={obj.wrapClass}
          />
        );
      case 'switch':
        return (
          <RenderInputSwitch
            name={obj.name}
            label={obj.label}
            options={obj.options}
            // num={obj.num}
            num={index}
            hideByClickId={obj.hideByClickId}
            className={obj.wrapClass}
          />
        );

      // case 'file':
      //   return (
      //     <RenderInputFile
      //       name={obj.name}
      //       label={obj.label}
      //       labelSecond={obj.labelSecond}
      //       typeAccept={obj.typeAccept}
      //       maxSize={obj.maxSize}
      //       textEmpty={obj.textEmpty}
      //       nameFolder={obj.nameFolder}
      //       // num={obj.num}
      //       num={index}
      //       className={obj.wrapClass}
      //       hideByClickId={obj.hideByClickId}
      //     />
      //   );
      // case 'dropzone':
      //   return (
      //     <RenderInputFileDropZone
      //       name={obj.name}
      //       label={obj.label}
      //       labelSecond={obj.labelSecond}
      //       typeAccept={obj.typeAccept}
      //       maxSize={obj.maxSize}
      //       textEmpty={obj.textEmpty}
      //       nameFolder={obj.nameFolder}
      //       // num={obj.num}
      //       num={index}
      //       hideByClickId={obj.hideByClickId}
      //       className={obj.wrapClass}
      //     />
      //   );
      // case 'fileVideo':
      //   return (
      //     <RenderInputFileVideo
      //       name={obj.name}
      //       label={obj.label}
      //       labelSecond={obj.labelSecond}
      //       allFields={obj.allFields}
      //       typeUpload={obj.typeUpload}
      //       maxSize={obj.maxSize}
      //       textEmpty={obj.textEmpty}
      //       // num={obj.num}
      //       num={index}
      //       className={obj.wrapClass}
      //     />
      //   );
      // case 'photo':
      //   return (
      //     <RenderInputFilePhoto
      //       name={obj.name}
      //       label={obj.label}
      //       labelSecond={obj.labelSecond}
      //       allFields={obj.allFields}
      //       typeUpload={obj.typeUpload}
      //       maxSize={obj.maxSize}
      //       typeFile={obj.typeFile}
      //       textEmpty={obj.textEmpty}
      //       // num={obj.num}
      //       num={index}
      //       className={obj.wrapClass}
      //     />
      //   );
      case 'multy':
        return (
          <RenderInputMulty
            mainname={obj.mainname}
            label={obj.label}
            labelSecond={obj.labelSecond}
            allFields={obj.allFields}
            checkErrorSubmit={checkErrorSubmit}
            setErrCheck={setErrCheck}
            // num={obj.num}
            num={index}
            className={obj.wrapClass}
            hideByClickId={obj.hideByClickId}
          />
        );
      case 'complex':
        return (
          <RenderInputComplex
            name={obj.name}
            label={obj.label}
            allFields={obj.allFields}
            btnAddText={obj.btnAddText}
            // num={obj.num}
            num={index}
            className={obj.wrapClass}
          />
        );
      case 'coords':
        return (
          <RenderInputCoords
            name={obj.name}
            placeholder={obj.placeholder}
            label={obj.label}
            labelSecond={obj.labelSecond}
            disabled={obj.disabled}
            // num={obj.num}
            num={index}
            className={obj.wrapClass}
          />
        );
      case 'city':
        return (
          <>
            <RenderInputCity
              name={obj.name}
              // num={obj.num}
              num={index}
              placeholder={obj.placeholder}
              label={obj.label}
              labelSecond={obj.labelSecond}
              disabled={obj.disabled}
              validate={obj.validate}
              checkErrorSubmit={checkErrorSubmit}
              setErrCheck={setErrCheck}
              className={obj.wrapClass}
            />
          </>
        );
      case 'star':
        return (
          <RenderInputStar
            name={obj.name}
            label={obj.label}
            num={index}
            className={obj.wrapClass}
          />
        );
      default:
    }
  }


  return (
    <>
      {Object.keys(fields).map((item, index) => (
        <React.Fragment
          key={index} >
          {
            (
              choiseFieldType({ ...fields[item], checkErrorSubmit, setErrCheck, 'num': (index + 1), 'validate': setValidate(fields[item].validate) })
            )
          }
        </React.Fragment>
      ))}
    </>
  )
}

export default RenderFields;
