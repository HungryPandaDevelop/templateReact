const accounInfo = {
  uid: false,
}
export const infoAccountReducer = (state=accounInfo, action) => {
  switch(action.type){
    case 'SET_INFO_ACCOUNT':
      return {...state, ...action.payload,}
    default: 
      return state
  }
}