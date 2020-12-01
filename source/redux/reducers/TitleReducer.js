import * as types from "../actions/types";
const initialState = {
  Name: "",
  savedSuccess: false,
};
export default function GetName(state = initialState, action) {
  switch (action.type) {
    case types.TITLE_NAME_STORED:
      return {
        Name: action.user,
        savedSuccess: true,
      };
    default:
      return state;
  }
}
