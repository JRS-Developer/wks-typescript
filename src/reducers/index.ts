import { combineReducers } from 'redux';
import { User } from '../actions';
import { usersReducer } from './users';

export interface StoreState {
  users: User[]
}

export const reducers = combineReducers<StoreState>({
  users: usersReducer
});
