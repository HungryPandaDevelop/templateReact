
import { useState, useRef, useEffect } from 'react';
import { Field } from 'redux-form';


const TempateInput = (props) => {

  const {
    input,
    meta: { error }
  } = props;

  const {
    label,
    options,
    wrapClass,
  } = props.obj;

  const [switchStatus, setSwitchStatus] = useState(false);
  const [firstLoad, setFirstLoad] = useState(0);

  const switchChange = (status) => {


    setSwitchStatus(status)
    if (status) {
      input.onChange(options[1].value);
      console.log(options[1].value)
    } else {
      input.onChange(options[0].value);
      console.log(options[0].value)
    }

  };

  useEffect(() => {
    if (input.value && firstLoad === 0) {
      setFirstLoad(1);

      if (options[0].value === input.value) {
        setSwitchStatus(false);
      }
      else {
        setSwitchStatus(true);
      }
    }
  }, []);




  return (
    <div className={wrapClass}>
      <label><b >{label}</b></label>
      <div
        className="switch-container"
        onClick={() => { switchChange(!switchStatus) }}
      >
        <span dangerouslySetInnerHTML={{ __html: options[0].name }}></span>
        <div
          className={`switch-input  ${switchStatus ? 'switch-input--active' : ''}`}

        >
          <i></i>
        </div>
        <span dangerouslySetInnerHTML={{ __html: options[1].name }}></span>
      </div>
    </div>
  )
}

const RenderInputSwitch = ({ obj }) => {

  return <Field
    name={obj.name}
    obj={obj}
    component={TempateInput}
  />;
}


export default RenderInputSwitch;