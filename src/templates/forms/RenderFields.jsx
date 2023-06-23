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

import RenderInputFile from './fields/RenderInputFile'; // файл

// import RenderInputFileDropZone from './fields/RenderInputFileDropZone'; // зона файлов

// import RenderInputFileVideo from './fields/RenderInputFileVideo'; // видео

import RenderInputFilePhoto from './fields/RenderInputFilePhoto'; // фото



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



  const choiseFieldType = (obj) => {

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
            obj={obj}
          />
        );
      case 'select':
        return (
          <RenderInputSelect
            obj={obj}
          />
        );
      case 'date':
        return (
          <RenderInputDate
            obj={obj}
          />
        );
      case 'password':
        return (
          <RenderInputPassword
            obj={obj}

          />
        );

      case 'checkbox':
        return (<RenderInputCheckbox
          obj={obj}
        />)
      case 'radio':
        return (
          <RenderInputRadio
            obj={obj}
          />
        );
      case 'switch':
        return (
          <RenderInputSwitch
            obj={obj}
          />
        );

      case 'file':
        return (
          <RenderInputFile
            obj={obj}
          />
        );
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
      case 'photo':
        return (
          <RenderInputFilePhoto
            name={obj.name}
            label={obj.label}
            labelSecond={obj.labelSecond}
            allFields={obj.allFields}
            typeUpload={obj.typeUpload}
            maxSize={obj.maxSize}
            typeFile={obj.typeFile}
            textEmpty={obj.textEmpty}
            className={obj.wrapClass}
          />
        );
      case 'multy':
        return (
          <RenderInputMulty
            obj={obj}
          />
        );
      case 'complex':
        return (
          <RenderInputComplex
            obj={obj}
          />
        );
      case 'coords':
        return (
          <RenderInputCoords
            obj={obj}
          />
        );
      case 'city':
        return (
          <>
            <RenderInputCity
              obj={obj}
            />
          </>
        );
      case 'star':
        return (
          <RenderInputStar
            obj={obj}
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
