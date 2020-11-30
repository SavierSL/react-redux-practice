import { combineReducers } from "redux";
import usersReducers from "./usersReducer";

const reducers = combineReducers({
  users: usersReducers,
});
export default reducers;
