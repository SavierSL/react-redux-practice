import { types } from "../actions/usersAction";
import * as Actions from "../actions/usersAction";

const INITIAL_STATE = {
  items: [],
};

export default function usersReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.GET_USERS_SUCCESS: {
      return { ...state, items: action.payload.items };
    }
    default: {
      return state;
    }
  }
}
