import { Link, useParams } from 'react-router-dom';
import { useMockData } from '../../../features/PostList/model/hooks/usePosts';


export const PostDetailsPage = () => {
   const { id } = useParams();
   const { getPostById, isLoading, error } = useMockData();
   const post = id ? getPostById(id) : null;

   if (isLoading) return <div>Загрузка...</div>;
   if (error) return <div>{error}</div>;
   if (!post) return <div>Пост не найден</div>;
   
   return (
      <>
      <h2>Подробности поста #{id}</h2>
      
      <ul>
         <li>ID поста:{post.id}</li>
         <li>Заголовок: {post.title}</li>
         <li>Текст: {post.body}</li>
         <li>Автор: {[post.author]}</li>
         <li>
            <Link to={`/users/${post.author}/posts`}>
               <h3>Страница автора</h3>
            </Link>
         </li>
      </ul>
      </>
   );
};