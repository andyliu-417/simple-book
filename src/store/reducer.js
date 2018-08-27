import { combineReducers } from "redux";
import headerReducer from "../components/Header/store";

export default combineReducers({
  header: headerReducer
});
