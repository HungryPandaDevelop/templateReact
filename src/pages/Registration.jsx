import { useEffect } from 'react';

import RenderForm from 'templates/forms/RenderForm';

import { regFields } from 'base/forms/regFields';

import { useNavigate } from 'react-router-dom';

import { connect } from 'react-redux';


// import { registrationAccount } from 'store/actions/registrationAccount';






const Registration = ({ formData }) => {


  const onSubmitIn = () => {

    console.log('in sub', formData.values)
    // if (formData) {
    //   // console.log('in')
    //   registrationAccount(formData).then((res) => {
    //     if (res) {
    //       navigate('/cabinet/', { replace: true });
    //     }
    //     else {
    //       console.log('Ошибка')
    //     }
    //   });

    // }
    // else {
    //   console.log('err validate')
    // }
  }
  // const navigate = useNavigate();


  return (
    <div className="main-full">
      <h1>
        Registration
      </h1>
      <RenderForm
        fields={regFields}
        btnSubmiText="Регистрация"
        onSubmitIn={onSubmitIn}
      />
    </div>
  )
}


const mapStateToProps = (state) => {

  return {
    formData: state.form.singleInput,
  }
}

export default connect(mapStateToProps)(Registration);

// export default Registration;