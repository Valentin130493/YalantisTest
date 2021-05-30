import { createStore, combineReducers } from "redux";
import homeReducer from "./homeReducer";
const reducers = combineReducers({
  homeReducer,
});
const store = createStore(reducers);
export default store;