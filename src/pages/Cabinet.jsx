import { saveListing } from 'services/saveListing';

import RenderForm from 'templates/forms/RenderForm';

import { accountFields } from 'base/forms/accountFields';

import { connect } from 'react-redux';

const Cabinet = ({ uid, formData }) => {

  const submitSuccess = () => {
    console.log('formData', formData.values)
    saveListing(formData.values, uid, 'users');
  }
  return (
    <div className="main-full">
      <h1>
        Cabinet, {uid}
      </h1>
      <RenderForm
        fields={accountFields}
        btnSubmiText="Сохранить"
        submitSuccess={submitSuccess}
      />
    </div>
  )
}

const mapStateToProps = (state) => {

  return {
    uid: state.account.uid,
    formData: state.form.singleInput,
  }
}

export default connect(mapStateToProps)(Cabinet);