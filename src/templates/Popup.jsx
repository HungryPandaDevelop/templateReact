
const Popup = ({ children }) => {
  return (
    <div className="popup element-show show" >
      <div className="popup-overlay"></div>
      <div className="popup-container">
        <div className="close-btn close-btn--popup "></div>
        {children}
      </div>
    </div>
  )
}

export default Popup
