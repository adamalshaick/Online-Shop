import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import profileReducer from "./profileReducer";
import itemReducer from "./itemReducer";
import cartReducer from "./cartReducer";
import cartItemReducer from "./cartItemReducer";

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  profile: profileReducer,
  item: itemReducer,
  cart: cartReducer,
  cartItem: cartItemReducer
});
