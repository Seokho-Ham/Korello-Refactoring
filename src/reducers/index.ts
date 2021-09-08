import { combineReducers } from 'redux';
import mainReducer from './main';
import loginStatus from './login';
const rootReducer = combineReducers({
  mainReducer,
  loginStatus,
});
export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
