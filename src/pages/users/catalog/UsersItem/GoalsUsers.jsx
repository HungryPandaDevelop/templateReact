import { renderGoals } from 'pages/users/hooks/renderGoals';


const GoalsUsers = ({ user }) => {

  const { goals } = user;

  if (goals === undefined || goals.length === 0) { return false; }


  return (
    <div className="goals-users">
      {goals.map((item, index) => (
        <div>
          <div className="goals-users-tag" key={index}>{renderGoals(item)}</div>
        </div>))
      }
    </div>
  )
}

export default GoalsUsers
