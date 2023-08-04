import TotalCountMessage from "./chat/TotalCountMessage";

const ControlsBtn = ({
  name,
  setPopupActive,
  setNameActive,
  setIdActive,
  idActive
}) => {

  const activeEl = (name) => {

    setPopupActive(true);

    setNameActive(name[1]);
    setIdActive(name[0]);
  }

  return (
    <div
      className={`controls-btn controls-${name[0]} ${name[0] === idActive && 'active'}`}
      onClick={() => activeEl(name)}
    ><i></i>
      {name[0] === 'chat' && <TotalCountMessage />}

    </div>
  )
}

export default ControlsBtn
