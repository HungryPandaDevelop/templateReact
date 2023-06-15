import RenderForm from 'templates/forms/RenderForm';

import { regFields } from 'base/forms/regFields';

// import { registrationAccount } from 'store/actions/registrationAccount';
console.log('regFields', regFields)
const LogIn = () => {
  return (
    <div>
      <h1>
        LogIn
      </h1>
      <RenderForm
        fields={regFields}
        btnSubmiText="Регистрация"
      />
    </div>
  )
}

export default LogIn
