import axios from "axios";
import { Dispatch } from "redux";
import { ActionTypes } from "./types";

const url = "http://localhost:3001/user";

export interface User {
  id: number;
  name: string;
  lastName: string;
}

export interface FetchUsersAction {
  type: ActionTypes.fetchUsers;
  payload: User[];
}

export interface DeleteUsersAction {
  type: ActionTypes.deleteUsers
  payload: number
}

export const fetchUsers = () => {
  return async (dispatch: Dispatch<FetchUsersAction>) => {
    const response = await axios.get<User[]>(url);

    dispatch({
      type: ActionTypes.fetchUsers,
      payload: response.data,
    });
  };
};

export const deleteUsers = (id: number): DeleteUsersAction => {
  return {
    type: ActionTypes.deleteUsers,
    payload: id
  }
}
