import {configureStore} from '@reduxjs/toolkit'
import itemsReducer from '../slices/items.slice'

export default configureStore({
  reducer: {
    global: itemsReducer,
  },
})
