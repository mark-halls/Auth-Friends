import { LOADING, LOAD_SUCCESS, LOAD_FAILED, DELETE } from "../actions";

const initialState = {
  friends: [],
  loading: false,
  error: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: true,
        error: null
      };

    case LOAD_SUCCESS:
      console.log(action);
      return {
        ...state,
        friends: [...action.payload.friends],
        loading: false,
        error: null
      };

    case LOAD_FAILED:
      return {
        ...state,
        friends: [],
        loading: false,
        error: action.payload
      };

    default: {
      return state;
    }
  }
};

export default reducer;
