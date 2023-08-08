import { saveListing } from 'services/saveListing';

const RenderUserBtn = ({ like, status, textBtn }) => {

  const onSetStatus = () => {
    let newData = { ...like, status: status }
    saveListing(newData, like.id, 'sympathy')
  }

  return (
    <div>
      <div
        className="btn btn--blue-border"
        onClick={() => { onSetStatus('agree') }}
      >
        {textBtn}
      </div>
    </div>
  )
}

export default RenderUserBtn
