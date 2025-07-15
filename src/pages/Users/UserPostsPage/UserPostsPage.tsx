import { useParams } from 'react-router-dom';
import { PostCard } from '../../../entities/post/ui/PostCard';
import { useMockData } from '../../../features/PostList/model/hooks/usePosts';


export const UserPostsPage = () => {
   const { id } = useParams<{ id: string }>();

   const { getPostsByAuthor, isLoading, error } = useMockData();
   const userPosts = id ? getPostsByAuthor(id) : [];

   if (isLoading) return <div>Загрузка...</div>;
   if (error) return <div>{error}</div>;

   return (
      <div>
         <h2>Посты пользователя #{id}</h2>
      
         <ol>
         {userPosts.length > 0 ? (
         userPosts.map(post => (
            <li key={post.id}>
               <PostCard {...post} />
            </li>
         ))
         ) : (
         <p>У этого пользователя нет постов</p>
         )}
         </ol>
      </div>
   );
};