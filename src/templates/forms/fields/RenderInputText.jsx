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
    className,
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

  useEffect(() => {
    // setNum();
  }, []);


  return (
    <div className={className}>
      {<i className="num-offset">{num}</i>}


      <input
        {...input}
        type="text"
        id={input.name}
        className={`input-decorate ${checkErrorSubmit && error && 'input-error'} ${input.value.length > 0 ? 'input-empty' : ''} `}
        placeholder={placeholder}
      />
      {label && <label htmlFor={input.name}><b>{label}</b>{labelSecond && <div className='hint-input-file'><i><span>{labelSecond}</span></i></div>}</label>}
      {(checkErrorSubmit && (error && <span className='input-error-text'>{error}</span>))}
    </div>
  );
}



const RenderInputText = ({ obj }) => {

  return <Field
    name={obj.name}
    obj={obj}
    component={TempateInputText}
  />;
}



export default RenderInputText;