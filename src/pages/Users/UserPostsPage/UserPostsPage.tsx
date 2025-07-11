import { useParams } from 'react-router-dom';

export const UserPostsPage = () => {
   const { id } = useParams();
   return <h2>Посты пользователя #{id}</h2>;
};