import { USER_STATE } from "./UserAction";

const defaultState = {};

export const UserREducer = (state = defaultState, action) => {
  switch (action.type) {
    case USER_STATE:
      return { ...state, user: action.payload };
    default:
      return state;
  }
};
