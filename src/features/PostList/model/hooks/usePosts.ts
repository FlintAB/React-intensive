import { useEffect, useState } from 'react';
import { mockPosts } from '../../../../widgets/PostList/model/MockPosts';
import type { Post } from '../../../../widgets/PostList/model/MockPosts';




export const useMockPosts = () => {
   const [posts, setPosts] = useState<Post[]>([]);
   const [isLoading, setIsLoading] = useState(true);
   const [error, setError] = useState<string | null>(null);

   useEffect(() => {
      const fetchPosts = async () => {
         try {
         setIsLoading(true);
         await new Promise(resolve => setTimeout(resolve, 500));
         setPosts(mockPosts);
         } catch (err) {
         setError(`Ошибка при загрузке постов: ${err}`);
         } finally {
         setIsLoading(false);
         }
      };

      fetchPosts();
   }, []);

   const getPostById = (id: string) => {
      return posts.find(post => post.id.toString() === id);
   };

   const getPostsByAuthor = (authorId: string) => {
      return posts.filter(post => post.author.toString() === authorId);
   };

   return {
      posts,
      isLoading,
      error,
      getPostById,
      getPostsByAuthor
   };
};