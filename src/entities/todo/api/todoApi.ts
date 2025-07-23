import { baseApi } from "../../../shared/api/baseApi";
import type { Todo } from "../model/types"; 


export const todosApi = baseApi.injectEndpoints({
   endpoints: (build) => ({
      getTodos: build.query<Todo[], void>({
         query: () => '/todos',
         providesTags: ['Todo'],
      }),
      getTodoById: build.query<Todo, number>({
         query: (id) => `/todos/${id}`,
         providesTags: (_result, _error, id) => [{ type: 'Todo', id }],
      }),
      getTodosByUser: build.query<Todo[], number>({
         query: (userId) => `/users/${userId}/todos`,
         providesTags: (result) =>
            result ? [...result.map(({ id }) => ({ type: 'Todo' as const, id })), 'Todo'] : ['Todo'],
      }),
   }),
});

export const { 
   useGetTodosQuery,
   useGetTodoByIdQuery,
   useGetTodosByUserQuery 
} = todosApi;