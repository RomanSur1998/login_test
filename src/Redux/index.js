import { applyMiddleware, combineReducers, createStore } from "redux";
import { UserREducer } from "./UserReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  user: UserREducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
