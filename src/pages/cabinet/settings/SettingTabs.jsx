import { useState } from "react";

const SettingTabs = () => {

  const allTabs = [['Личные данные'], ['Приватность'], ['Черный список']];
  const [currentTab, setCurrentStub] = useState(0);
  const choiseTabs = (index) => {
    console.log('cl', index)
    setCurrentStub(index);
  }

  return (
    <div className="settings-tabs-container">
      {allTabs.map((item, index) => (<div
        className={`settings-tab ${currentTab === index ? 'active' : ''}`}
        key={index}
        onClick={() => { choiseTabs(index) }}
      >{item}</div>))}
    </div>
  )
}

export default SettingTabs
