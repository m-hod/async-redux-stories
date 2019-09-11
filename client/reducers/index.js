import {combineReducers} from 'redux'

import errorMessage from './error-message'
import subreddits from './subreddits'
import waiting from './waiting'
import images from './images'

export default combineReducers({
  errorMessage,
  subreddits,
  waiting,
  images
})
