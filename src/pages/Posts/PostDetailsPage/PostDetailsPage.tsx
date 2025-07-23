import { useParams } from 'react-router-dom';
import { useGetPostByIdQuery } from '../../../entities/post/api/postApi';
import { PostCard } from '../../../entities/post/ui/PostCard';
import type { FC } from 'react';

export const PostDetailsPage: FC = () => {
   const { id } = useParams();
   const {  data: post, isLoading,  error } = useGetPostByIdQuery(Number(id));

   if (isLoading) return <div>Загрузка...</div>;
   if (error) return <div>Ошибка загрузки поста</div>;
   if (!post) return <div>Пост не найден</div>;
   
   return (
      <>
      <h2>Подробности поста #{id}</h2>

      <PostCard {...post}/>

      </>
   );
};