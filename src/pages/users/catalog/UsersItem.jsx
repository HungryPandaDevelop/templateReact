


import { Link } from 'react-router-dom';

import UserImg from 'pages/users/catalog/UsersItem/UserImg';
import HotelUser from 'pages/users/catalog/UsersItem/HotelUser';
import GoalsUsers from 'pages/users/catalog/UsersItem/GoalsUsers';
import NameUsers from 'pages/users/catalog/UsersItem/NameUsers';
import Btns from 'pages/users/catalog/UsersItem/Btns';

const UserItem = ({ account, user, likes }) => {

  console.log('user', user)


  return (
    <Link className="users-item" href="/">
      <UserImg
        user={user}
      />

      <div className="users-item-bg"></div>
      <div className="users-item-info">
        {/* <HotelUser
          user={user}
        /> */}
        <GoalsUsers
          user={user}
        />
        <NameUsers
          user={user}
        />
        <Btns
          user={user}
          account={account}
          likes={likes}
        />

      </div>


    </Link>
  )
}

export default UserItem;
