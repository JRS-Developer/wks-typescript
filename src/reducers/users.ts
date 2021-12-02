import { User } from "../actions";
import { Action, ActionTypes } from "../actions/types";

export const usersReducer = (
  state: User[] = [],
  action: Action
): User[] => {
  switch (action.type) {
    case ActionTypes.fetchUsers: {
      return action.payload;
    }
    case (ActionTypes.deleteUsers): {
      const id = action.payload
      return state.filter(u => u.id !== id)
    }
    default:
      return state;
  }
};
