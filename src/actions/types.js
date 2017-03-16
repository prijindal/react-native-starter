/* @flow */

export type UserAction = {
  type: 'SET_USER',
  payload: string,
}

export type Action =
  { type: 'OPEN_DRAWER'}
    | { type: 'CLOSE_DRAWER'}
    | UserAction

export type Dispatch = (action:Action | Array<Action>) => any;
export type GetState = () => Object;
export type PromiseAction = Promise<Action>;
