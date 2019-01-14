import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import profileReducer from "./profileReducer";
import itemReducer from "./itemReducer";
import cardReducer from "./cardReducer";

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  profile: profileReducer,
  item: itemReducer,
  cardItems: cardReducer
});
