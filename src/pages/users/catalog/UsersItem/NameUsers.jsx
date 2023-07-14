
const NameUsers = ({ user }) => {

  const calculate_age = dob => {
    const birthDate = new Date(dob);
    const difference = Date.now() - birthDate.getTime();
    const age = new Date(difference);

    return Math.abs(age.getUTCFullYear() - 1970);
  }

  return (
    <div className="name-users">
      <h3>
        <span>{user?.name}</span>
        {user.dateBerth ? (<span>, {calculate_age(user.dateBerth)}</span>) : ('')}
      </h3>
    </div>
  )
}

export default NameUsers
