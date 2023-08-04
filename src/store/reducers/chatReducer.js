
let unreadChatCount = 0;

export const chatReducer = (state=unreadChatCount, action) => {
  switch(action.type){
    case 'SET_COUNT_UNREAD':
      return state = action.payload
    default: 
      return state
  }
}