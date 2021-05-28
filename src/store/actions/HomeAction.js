import {INCREMENT, DECREMENT} from '../types';

export function incrementCount() {
  return dispatch => {
    dispatch({
      type: INCREMENT,
    });
  };
}

export function decrementCount() {
  return dispatch => {
    dispatch({
      type: DECREMENT,
    });
  };
}
