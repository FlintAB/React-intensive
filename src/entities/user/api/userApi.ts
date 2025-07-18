import { baseApi } from "../../../shared/api/baseApi";
import type { User } from "../../../shared/types/user";

export const usersApi = baseApi.injectEndpoints({
   endpoints: (build) => ({
      getUsers: build.query<User[], void>({
         query: () => '/users',
         providesTags: ['User'],
      }),
      getUserById: build.query<User, number>({
         query: (id) => `/users/${id}`,
         providesTags: (_result, _error, id) => [{ type: 'User', id }],
      }),
   }),
});

export const { 
   useGetUsersQuery, 
   useGetUserByIdQuery 
} = usersApi;