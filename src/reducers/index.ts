import { combineReducers } from 'redux';
import mainReducer from './main';
import boardReducer from './board';
import loginStatus from './login';
const rootReducer = combineReducers({
  mainReducer,
  boardReducer,
  loginStatus,
});
export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
