import { configureStore } from '@reduxjs/toolkit'
import {baseApi} from '@src/shared/api'
import {tasksFilterSlice} from '@src/entities/task'

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    [tasksFilterSlice.reducerPath]: tasksFilterSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
})
