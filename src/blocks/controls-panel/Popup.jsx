import Chat from 'blocks/controls-panel/chat/Chat'
import Likes from 'blocks/controls-panel/Likes'

const Popup = ({
  setPopupActive,
  nameActive,
  idActive,
  setIdActive
}) => {

  const closePopup = () => {
    setPopupActive(false);
    setIdActive('');
  }

  return (
    <div className="controls-panel-popup">
      <div className="controls-panel-head">{nameActive}</div>
      <div className={`panel-deg panel-deg--${idActive}`}></div>
      <div className="panel-close" onClick={closePopup}></div>
      {idActive === 'chat' && <Chat />}
      {idActive === 'like' && <Likes />}
    </div>
  )
}

export default Popup
