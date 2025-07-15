import { useState, useEffect } from "react";
import { mockPosts, mockAlbums, mockPhotos, mockTodos } from "../../../../shared/constants/mockData";

export const useMockData = () => {
   const [isLoading, setIsLoading] = useState<boolean>(true);
   const [error, setError] = useState<string | null>(null);

   useEffect(() => {
      const loadData = async () => {
         try {
         await new Promise(resolve => setTimeout(resolve, 500));
         } catch (err) {
         setError(`Ошибка загрузки данных: ${err}`);
         } finally {
         setIsLoading(false);
         }
      };

      loadData();
   }, []);

   const getPostById = (id: string) => mockPosts.find(post => post.id.toString() === id);
   const getPostsByAuthor = (authorId: string) => 
      mockPosts.filter(post => post.author.toString() === authorId);

   const getAlbumById = (id: string) => mockAlbums.find(album => album.id.toString() === id);
   const getAlbumsByAuthor = (authorId: string) => 
      mockAlbums.filter(album => album.author.toString() === authorId);
   const getPhotosByAlbum = (albumId: string) => 
      mockPhotos.filter(photo => photo.albumId.toString() === albumId);

   const getAlbumWithPhotos = (albumId: string) => {
      const album = getAlbumById(albumId);
      if (!album) return null;

      const photos = getPhotosByAlbum(albumId);
      return {
         ...album,
         photos
      };
};

   const getTodoById = (id: string) => mockTodos.find(todo => todo.id.toString() === id);
   const getTodosByAuthor = (authorId: string) => 
      mockTodos.filter(todo => todo.author.toString() === authorId);

   return {
      isLoading,
      error,

      getPostById,
      getPostsByAuthor,

      getAlbumById,
      getAlbumsByAuthor,
      getPhotosByAlbum,

      getAlbumWithPhotos,

      getTodoById,
      getTodosByAuthor,
   };
};