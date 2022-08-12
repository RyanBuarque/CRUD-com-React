import { configureStore } from '@reduxjs/toolkit'

import postReduce from './reducers/post'

export default configureStore({
  reducer: {
    postsStruct: postReduce
  },
})
