const accounInfo = {
  uid: false,
  email: '',
  
}
export const accountReducer = (state=accounInfo, action) => {
  switch(action.type){
    case 'SET_INFO_ACCOUNT':
      return {...state, ...action.payload,}
    default: 
      return state
  }
}