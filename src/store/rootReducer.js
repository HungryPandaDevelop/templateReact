import { combineReducers } from 'redux';
import {reducer as formReducer} from 'redux-form';
import {accountReducer} from 'store/reducers/accountReducer';
import {chatReducer} from 'store/reducers/chatReducer';
import {sympReducer} from 'store/reducers/sympReducer';


const rootReducer = combineReducers({
  form: formReducer,
  account : accountReducer,
  rooms : chatReducer,
  sympathys : sympReducer,
});

export default rootReducer;
