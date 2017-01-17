import { createReducer } from 'reduxsauce';
import type { Action } from '../actions/types';
import { SET_USER } from '../actions/user';

export type State = {
  name: string
}

const INITIAL_STATE = {
  name: '',
};

const setUser = (state: State = INITIAL_STATE, action: Action) => ({
  ...state,
  name: action.payload,
});

const HANDLERS = {
  [SET_USER]: setUser,
};

export default createReducer(INITIAL_STATE, HANDLERS);
