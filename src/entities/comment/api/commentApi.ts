import { baseApi } from "../../../shared/api/baseApi";
import type { Comment } from "../../../shared/types/comment";

export const commentsApi = baseApi.injectEndpoints({
   endpoints: (build) => ({
      getCommentsByPost: build.query<Comment[], number>({
         query: (postId) => `/posts/${postId}/comments`,
         providesTags:  (result) => 
         result ? [...result.map(({ id }) => ({ type: 'Comment' as const, id })), 'Comment'] : ['Comment'],
      }),
   }),
});

export const { useGetCommentsByPostQuery } = commentsApi;