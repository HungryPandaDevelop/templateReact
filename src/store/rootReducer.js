
import { combineReducers } from 'redux';
import {reducer as formReducer} from 'redux-form';
import {accountReducer} from 'store/reducers/accountReducer'
import {chatReducer} from 'store/reducers/chatReducer'

const rootReducer = combineReducers({
  form: formReducer,
  account : accountReducer,
  rooms : chatReducer
});

export default rootReducer;
