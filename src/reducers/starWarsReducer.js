import {
  /* we need our action types here*/
  GET_CHARACTERS_START,
  GET_CHARACTERS_SUCCESS,
  GET_CHARACTERS_FAILED
} from '../actions';
const initialState = {
  characters: [],
  getCharacters: false,
  errorMessage: null
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    case GET_CHARACTERS_START:
      return {};

    default:
      return state;
  }
};
