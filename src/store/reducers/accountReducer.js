localStorage.removeItem('account');
let sessionAccount = localStorage.getItem('account') && JSON.parse(localStorage.getItem('account'));

let accounInfo = sessionAccount ? sessionAccount : {
  uid: '',
  email: '', 
};

export const accountReducer = (state=accounInfo, action) => {
  switch(action.type){
    case 'SET_INFO_ACCOUNT':
      return {...state, ...action.payload,}
    default: 
      return state
  }
}