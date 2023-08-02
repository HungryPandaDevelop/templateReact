
const UserImg = ({ user }) => {

  const img = user.imgsAccount ? user.imgsAccount[0] : false;

  return img ? (
    <div
      className="users-item-img img-cover"
      style={{ backgroundImage: `url(${img})` }}
    >
    </div>
  ) : (
    <div className="users-item-img--empty"></div>
  )



}

export default UserImg
