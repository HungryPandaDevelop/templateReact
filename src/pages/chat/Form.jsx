import RenderForm from 'components/forms/RenderForm';
import { connect } from 'react-redux';

import { chatFields } from 'base/forms/chatFields';

import { sendMessage } from 'services/chatEvents';


const Form = ({ formData, uid, roomId }) => {

  const submitSuccess = () => {
    console.log(formData.values)

    sendMessage(roomId, formData.values.message, uid).then(() => {
      formData.values.message = '';
    });
  }


  return (
    <div>
      <h2>Chat Form</h2>

      <RenderForm
        fields={chatFields}
        btnSubmiText="Отправить"
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

export default connect(mapStateToProps)(Form);
