import { combineReducers } from "redux-immutable";
import { reducer as HomeReducer } from "../pages/Home/store"
import { reducer as DetailReducer } from "../pages/Detail/store"
import { reducer as LoginReducer } from "../pages/Login/store"
import { reducer as HeaderReducer } from "../components/Header/store"

export default combineReducers({
  Home: HomeReducer,
  Detail: DetailReducer,
  Login: LoginReducer,
  Header: HeaderReducer,
});
