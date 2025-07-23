import { baseApi } from "../../../shared/api/baseApi";
import type { Post } from "../../../shared/types/post";

export const postsApi = baseApi.injectEndpoints({
   endpoints: (build) => ({
      getPosts: build.query<Post[], void>({
         query: () => '/posts',
         providesTags: (result) =>
         result ? [...result.map(({ id }) => ({ type: 'Post' as const, id })), 'Post'] : ['Post'],
      }),
      getPostById: build.query<Post, number>({
         query: (id) => `/posts/${id}`,
         providesTags: (_result, _error, id) => [{ type: 'Post' as const, id }],
      }),
      getPostsByUser: build.query<Post[], number>({
         query: (userId) => `/users/${userId}/posts`,
         providesTags: (result) =>
         result ? [...result.map(({ id }) => ({ type: 'Post' as const, id })), 'Post'] : ['Post'],
      }),
   }),
});

export const { 
   useGetPostsQuery, 
   useGetPostByIdQuery,
   useGetPostsByUserQuery 
} = postsApi;