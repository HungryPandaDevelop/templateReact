import { Link } from 'react-router-dom';
const Nav = () => {
  return (
    <div className="main-full">
      <h2>Nav</h2>
      <ul>
        <li>
          <Link to="/">Main</Link>
        </li>
        <li>
          <Link to="/registration">Registration</Link>
        </li>
        <li>
          <Link to="/authorization">Authorization</Link>
        </li>
        <li>
          <Link to="/cabinet">Cabinet</Link>
        </li>
        <li>
          <Link to="/list_users">List Users</Link>
        </li>
        <li>
          <Link to="/chat">Chat</Link>
        </li>
      </ul>
    </div>
  )
};

export default Nav;
