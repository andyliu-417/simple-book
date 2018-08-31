import { combineReducers } from "redux-immutable";
import { reducer as HeaderReducer } from "../components/Header/store"

export default combineReducers({
  Header: HeaderReducer,
});
