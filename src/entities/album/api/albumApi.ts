import { baseApi } from "../../../shared/api/baseApi";
import type { Album } from "../model/types";

export const albumsApi = baseApi.injectEndpoints({
   endpoints: (build) => ({
      getAlbums: build.query<Album[], void>({
         query: () => '/albums',
         providesTags: ['Album'],
      }),
      getAlbumById: build.query<Album, number>({
         query: (id) => `/albums/${id}`,
         providesTags: (_result, _error, id) => [{ type: 'Album', id }],
      }),
      getAlbumByUser: build.query<Album[], number>({
         query: (userId) => `/users/${userId}/albums`,
         providesTags: (result) =>
         result ? [...result.map(({ id }) => ({ type: 'Album' as const, id })), 'Album'] : ['Album'],
      }),
   }),
});

export const {
   useGetAlbumsQuery,
   useGetAlbumByIdQuery,
   useGetAlbumByUserQuery
} = albumsApi;