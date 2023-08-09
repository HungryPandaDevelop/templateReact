
let sympathy = [];

export const sympReducer = (state=sympathy, action) => {
  switch(action.type){
    case 'SET_SYMPATHY':
      return [...action.payload]
    default: 
      return state
  }
}