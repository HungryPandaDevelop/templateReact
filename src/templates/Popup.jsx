import { Link } from "react-router-dom"

const Popup = ({ children }) => {
  return (
    <div className="popup element-show show" >
      <div className="popup-overlay"></div>
      <div className="popup-container">
        <Link to="/" className="close-btn close-btn--popup "></Link>
        {children}
      </div>
    </div>
  )
}

export default Popup
