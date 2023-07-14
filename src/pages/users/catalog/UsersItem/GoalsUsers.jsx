

const GoalsUsers = ({ user }) => {

  const { goals } = user;

  const renderGoals = (el) => {

    el = el.toLowerCase()

    if (el.indexOf('бокал') >= 0) {
      return <div className="goals-users-tag" > <i className="bokal-ico"></i></div>
    }
    if (el.indexOf('море') >= 0) {
      return <div className="goals-users-tag"><i className="plag-ico"></i></div>
    }
    if (el.indexOf('номер') >= 0) {
      return <div className="goals-users-tag"><i className="padushka-ico"></i></div>
    }
    if (el.indexOf('ресторан') >= 0) {
      return <div className="goals-users-tag"><i className="pribor-ico"></i></div>
    }
  }

  if (goals === undefined || goals.length === 0) { return false; }

  console.log('goals', goals)
  const allGoals = goals.map((item, index) => {
    return (<div key={index}>{renderGoals(item)}</div>);
  });



  return (
    <div className="goals-users">
      {allGoals}
    </div>
  )
}

export default GoalsUsers
