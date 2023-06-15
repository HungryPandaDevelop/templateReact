import RenderFields from 'templates/forms/RenderFields';

import { reduxForm } from 'redux-form';

import { useState } from 'react';

// --------------------------------------------------------------------

const TemplateForm = (props) => {
  const {
    fields,
    btnSubmiText,
    onSubmitIn,
    waitAnsw,
  } = props;


  const [checkErrorSubmit, setCheckErrorSubmit] = useState(false);
  const [errCheck, setErrCheck] = useState(true);


  const onSubmit = (e) => {

    e.preventDefault();
    setCheckErrorSubmit(true);

    setTimeout(() => {
      setCheckErrorSubmit(false);
    }, 10000);

    errCheck && !waitAnsw && onSubmitIn();

  };

  if (!fields) {
    return <>Empty Fields For Form...</>
  }

  return (
    <form
      className="form main-grid"
    >
      <RenderFields
        fields={fields}
        checkErrorSubmit={checkErrorSubmit}
        setErrCheck={setErrCheck}

      />
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


