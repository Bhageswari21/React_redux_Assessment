import ACTION_TYPES from '../actions/actionTypes'

const initialState = {
  result: [],
  error: null,
};

const valuesReducer = (state = initialState, { payload, type }) => {
  switch (type) {
    case ACTION_TYPES.FETCH_SUCCESS:
      return {
        ...state,
        result: payload,
        error: null,
      };

    case ACTION_TYPES.FETCH_FAIL:
      return {
        ...state,
        error: payload,
      };
      
    default:
      return state;
  }
};

export default valuesReducer;












