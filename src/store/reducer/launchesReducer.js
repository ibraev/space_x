import { GET_PAST_LAUNCHES_REQUEST } from '../actions/launchesTypes/launchesTypes';

const INITIAL_STATE = {
  past_launches : [],
  error: null,
  loading: true
}

export const launchesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_PAST_LAUNCHES_REQUEST:
      return {
        ...state,
        increment: action.payload,
        loading: false
      }
    default:
      return state
  }
}