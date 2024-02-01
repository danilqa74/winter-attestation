import {createSlice} from "@reduxjs/toolkit";
import {TasksFilterDto} from "../api/api.types"


export const tasksFilterSlice = createSlice({
  name: 'tasks-filter',
  initialState: TasksFilterDto.All,
  reducers: {
    changeFilter: (state, action) => {
      state = action.payload;
      return state;
    },
  }
})

export const {changeFilter} = tasksFilterSlice.actions;
