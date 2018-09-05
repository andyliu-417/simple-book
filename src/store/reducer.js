import { combineReducers } from "redux-immutable";
import { reducer as HeaderReducer } from "../components/Header/store"
import { reducer as HomeReducer } from "../pages/Home/store"

export default combineReducers({
  Header: HeaderReducer,
  Home: HomeReducer,
});
