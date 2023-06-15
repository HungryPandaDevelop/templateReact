
import { combineReducers } from 'redux';
import {reducer as formReducer} from 'redux-form';
import {infoAccountReducer} from 'store/reducers/infoAccountReducer'

const rootReducer = combineReducers({
  form: formReducer,
  infoAccountReducer : infoAccountReducer
});

export default rootReducer;
