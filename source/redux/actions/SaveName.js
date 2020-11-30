import * as types from './types';

export function SaveTitleName(name) {
  return function(dispatch) {
    dispatch(setName(name));
  };
}
export function setName(name) {
  return {
    type: types.TITLE_NAME_STORED,
    user:name
  };
}
