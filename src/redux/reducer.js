import { combineReducers } from "redux";
import {
  authReducer,
  getCountryReducer,
  getParentVersionReducer,
  getPatronReducer
} from "./slices";

export const rootReducers = combineReducers({
  authState: authReducer,
  getPatronState: getPatronReducer,
  getParentVersion: getParentVersionReducer,
  getAllCountry: getCountryReducer
});
