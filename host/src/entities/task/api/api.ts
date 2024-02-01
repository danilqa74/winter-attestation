import {baseApi} from '@src/shared/api';
import * as Types from './api.types';

const api = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getTasks: build.query<Types.TaskDto[], Types.TasksFilterDto>({
      query: (filter) => ({
        url: '/tasks',
        params: {
          filter,
        }
      }),
      providesTags: [{type: 'Tasks', id: 'TASKS' }]
    }),
    toggleStatus: build.mutation<Types.TaskDto, string>({
      query: (id) => ({
        url: `/tasks/${id}`,
        method: 'PATCH',
      }),
      invalidatesTags: [{ type: 'Tasks', id: 'TASKS' }],
    })
  }),
})

export const {useGetTasksQuery, useLazyGetTasksQuery, useToggleStatusMutation} = api;


