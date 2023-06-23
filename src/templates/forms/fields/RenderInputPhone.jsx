import { Field } from 'redux-form';
import { useEffect } from 'react';

import InputMask from 'react-input-mask';


const TempateInput = (props) => {
  const {
    input,
    meta: { error }
  } = props;

  const {
    label,
    labelSecond,
    num,
    wrapClass,
    checkErrorSubmit,
    setErrCheck,
  } = props.obj;

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
      {/* {<i className="num-offset">{num}</i>} */}
      {label && <label htmlFor={input.name}><b>{label}</b>{labelSecond && <div className='hint-input'><i><span>{labelSecond}</span></i></div>}</label>}
      {<InputMask
        {...input}
        mask='+7 (999) 999-99-99'
        placeholder='+7 (999) 999-99-99'
        maskChar={null}
        id={input.name}
        className={`input-decorate ${checkErrorSubmit && error && 'input-error'} ${input.value.length > 0 ? 'input-empty' : ''} `}
      />}

      {(checkErrorSubmit && (error && <span className='input-error-text'>{error}</span>))}
    </div>
  );
}


const RenderInputPhone = ({ obj }) => {

  return <Field
    name={obj.name}
    validate={obj.validate}
    obj={obj}
    component={TempateInput}
  />;
}

export default RenderInputPhone;