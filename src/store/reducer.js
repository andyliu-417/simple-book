import { combineReducers } from "redux";
import { reducer as HeaderReducer } from "../components/Header/store"

export default combineReducers({
  Header: HeaderReducer,
});
