import { Field } from 'redux-form';
import { useEffect } from 'react';



const TempateInputText = (props) => {

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




  useEffect(() => {
    console.log('in check')
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
      {<i className="num-offset">{num}</i>}


      <input
        {...input}
        type="text"
        id={input.name}
        placeholder={placeholder}
        className={`input-decorate ${checkErrorSubmit && error && 'input-error'} ${input.value.length > 0 ? 'input-empty' : ''} `}

      />
      {label && <label htmlFor={input.name}><b>{label}</b>{labelSecond && <div className='hint-input'><i><span>{labelSecond}</span></i></div>}</label>}
      {(checkErrorSubmit && (error && <span className='input-error-text'>{error}</span>))}
    </div>
  );
}



const RenderInputText = ({ obj }) => {

  return <Field
    name={obj.name}
    validate={obj.validate}
    obj={obj}
    component={TempateInputText}
  />;
}



export default RenderInputText;