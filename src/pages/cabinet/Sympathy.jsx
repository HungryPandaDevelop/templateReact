import Tabs from 'pages/cabinet/parts/Tabs';
import SympathyItem from 'pages/cabinet/parts/SympathyItem'
import { connect } from 'react-redux';
import { useState } from 'react';

const Sympathy = ({ account, sympathys }) => {
  console.log('sympathy', sympathys)


  return (
    <>
      <div className="stub"></div>
      <div className="main-full">
        <Tabs
          active={3}
        />
        <div className="border-container border-null-top account-main" >
          <div className="main-grid">
            {sympathys.map((sympathy, index) => {
              if (sympathy) {
                return (
                  <SympathyItem
                    key={index}
                    uid={account.uid}
                    sympathy={sympathy.data}
                    sympathys={sympathys}

                  />
                )
              }
            }
            )}
          </div>

        </div>
      </div>
    </>
  )
}


const mapStateToProps = (state) => {

  return {
    account: state.account,
    sympathys: state.sympathys,
  }
}

export default connect(mapStateToProps)(Sympathy);