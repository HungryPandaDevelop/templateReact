import { saveListing } from 'services/saveListing';

const RenderUserBtn = ({ sympathy, status, textBtn }) => {

  const onSetStatus = () => {
    let newData = { ...sympathy, status: status }
    saveListing(newData, sympathy.id, 'sympathy')
  }

  return (
    <div
      className={`sympathy-btn ${status}-sympathy-btn ${sympathy.status === status ? 'active' : ''}`}
      onClick={() => { onSetStatus('agree') }}
      title={textBtn}
    ></div>
  )
}

export default RenderUserBtn
