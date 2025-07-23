import { baseApi } from "../../../shared/api/baseApi";
import type { Photo } from "../model/types"; 

export const photosApi = baseApi.injectEndpoints({
   endpoints: (build) => ({
      getPhotos: build.query<Photo[], void>({
         query: () => '/photos',
         providesTags: ['Photo'],
      }),
      getPhotoById: build.query<Photo, number>({
         query: (id) => `/photos/${id}`,
         providesTags: (_result, _error, id) => [{ type: 'Photo', id }],
      }),
      getPhotoByAlbum: build.query<Photo[], number>({
      query: (albumId) => `/albums/${albumId}/photos`,
      providesTags: (result) => 
         result ? [...result.map(({ id }) => ({ type: 'Photo' as const, id })), 'Photo'] : ['Photo'],
      }),
   }),   
});

export const {
   useGetPhotosQuery,
   useGetPhotoByIdQuery,
   useGetPhotoByAlbumQuery
} = photosApi;
