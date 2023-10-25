import { combineReducers } from "redux";
import newsReducers from "./news.reducers";

const appReducer = combineReducers({
  newsReducers
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
