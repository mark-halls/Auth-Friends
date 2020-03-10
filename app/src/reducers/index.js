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

    case DELETE:
      return {
        ...state,
        friends: [
          ...state.friends.filter(friend => friend.id !== action.payload.id)
        ],
        loading: false,
        error: null
      };

    default: {
      return state;
    }
  }
};

export default reducer;
