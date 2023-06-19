import { Field } from 'redux-form';
import { useState, useEffect } from 'react';


const TemplateFieldPassword = (props) => {

  const {
    input,
    meta: { error }
  } = props;

  const {
    label,
    labelSecond,
    placeholder,
    num,
    checkErrorSubmit,
    setErrCheck,
    wrapClass,
  } = props.obj;

  const [showPass, setShowPass] = useState(false);


  useEffect(() => {

    if (setErrCheck) {
      if (error) {
        setErrCheck(false);
      }
      else {
        setErrCheck(true);
      }
    }

  }, [error]);


  return (
    <div className={wrapClass}>
      {num && <i className="num-offset">{num}</i>}


      <input
        type={showPass ? ("text") : ("password")}
        {...input}
        id={input.name}
        placeholder={placeholder}
        className={`input-decorate ${checkErrorSubmit && error && 'input-error'} ${input.value.length > 0 ? 'input-empty' : ''}`}
      />
      {label && <label htmlFor={input.name}><b>{label}</b>{labelSecond && <div className='hint-input'><i><span>{labelSecond}</span></i></div>}</label>}
      <i className="pass-ico" data-visibility={showPass} onClick={() => { setShowPass((prevState) => !prevState) }}></i>

      {(checkErrorSubmit && (error && <span className='input-error-text'>{error}</span>))}
    </div>
  )
}

const RenderInputPassword = ({ obj }) => {



  return <Field
    name={obj.name}
    validate={obj.validate}
    obj={obj}
    component={TemplateFieldPassword}
  />;
}

export default RenderInputPassword;