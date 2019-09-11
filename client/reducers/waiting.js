import {
  SHOW_ERROR,
  REQUEST_POSTS,
  RECEIVE_POSTS,
  RECEIVE_IMAGES } from '../actions'

const waiting = (state = false, action) => {
  switch (action.type) {
    case REQUEST_POSTS:
      return true

    case RECEIVE_POSTS:
      return false

    case SHOW_ERROR:
      return false

    case RECEIVE_IMAGES:
      return false

    default:
      return state
  }
}

export default waiting
