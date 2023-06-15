import { Link } from 'react-router-dom';
const Nav = () => {
  return (
    <div>
      <h2>Nav</h2>
      <ul>
        <li>
          <Link to="/">Main</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </div>
  )
};

export default Nav;
