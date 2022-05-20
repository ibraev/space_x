import {
  GET_PAST_LAUNCHES_FAILURE,
  GET_PAST_LAUNCHES_REQUEST,
  GET_PAST_LAUNCHES_SUCCESS
} from '../launchesTypes/launchesTypes';

export const getPastLaunchesRequest = () => ({
  type: GET_PAST_LAUNCHES_REQUEST
})

export const getPastLaunchesSuccess = (payload) => ({
  type: GET_PAST_LAUNCHES_SUCCESS,
  payload
})

export const getPatLaunchesFailure = (error) => ({
  type: GET_PAST_LAUNCHES_FAILURE,
  error
})
