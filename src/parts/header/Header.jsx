import logo from 'frontend/images/logo.svg'
import { Link } from 'react-router-dom'
import Nav from 'parts/block/Nav';
import InfoAccount from 'parts/block/InfoAccount';

const Header = () => {
  return (
    <>
      <header className="main-page-header">
        <div className="main-grid line-header line-header-nav">
          <div className="col-4 vertical-align">
            <nav className="nav-header">
              <Nav />
            </nav>
          </div>
          <div className="col-2 logo-container">
            <Link className="logo" to="/"> <img src={logo} alt={logo} /></Link>
          </div>
          <div className="col-6 vertical-align">
            <div className="btn-container">
              <InfoAccount />
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
