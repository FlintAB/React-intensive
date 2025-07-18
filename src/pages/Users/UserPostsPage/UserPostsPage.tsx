import { useParams } from 'react-router-dom';
import { PostCard } from '../../../entities/post/ui/PostCard';
import { useGetPostsByUserQuery } from '../../../entities/post/api/postApi';


export const UserPostsPage = () => {
   const { id } = useParams<{ id: string }>();

   const {data: posts, isLoading, error} = useGetPostsByUserQuery(Number(id));

   if (isLoading) return <div>Загрузка...</div>;
   if (error) return <div>Ошибка при получении постов автора</div>;

   return (
      <div>
         <h2>Посты пользователя #{id}</h2>

         {posts?.length ? (
            <ol>
            {posts.map(post => (
               <li key={post.id}>
               <PostCard {...post} />
               </li>
            ))}
         </ol>
         ) : (
            <p>У этого пользователя нет постов</p>
         )}
      </div>
   );
};