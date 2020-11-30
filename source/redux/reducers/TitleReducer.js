import * as types from '../actions/types';
const initialState = {
  Name: '',
};
export default function GetName(state = initialState, action) {
  switch (action.type) {
    case types.TITLE_NAME_STORED:
      return {
        Name:action.user
      };
    default:
      return state;
  }
}
