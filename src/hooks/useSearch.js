import { useReducer, useCallback } from "react";

const ACTIONS = {
  UPDATE_KEYWORD: "UPDATE_KEYWORD",
  UPDATE_RATING: "UPDATE_RATING",
};
const ACTION_REDUCERS = {
  [ACTIONS.UPDATE_KEYWORD]: (state, action) => ({
    ...state,
    search: action.payload,
    times: state.times + 1,
  }),
  [ACTIONS.UPDATE_RATING]: (state, action) => ({
    ...state,
    rating: action.payload,
  }),
};
const reducer = (state, action) => {
  return ACTION_REDUCERS[action.type]
    ? ACTION_REDUCERS[action.type](state, action)
    : state;
};

const useSearch = ({ initialSearch, initialRating }) => {
  const [state, dispatch] = useReducer(reducer, {
    search: initialSearch,
    rating: initialRating,
    times: 0,
  });
  const { search, rating, times } = state;
 
  return { 
   search, 
   rating, 
   times, 
   updateSearch: useCallback(search => dispatch({ type: ACTIONS.UPDATE_KEYWORD, payload: search.trim()}), []),
   updateRating: useCallback(rating => dispatch({ type: ACTIONS.UPDATE_RATING, payload: rating}), [])
  };
};

export default useSearch; 
