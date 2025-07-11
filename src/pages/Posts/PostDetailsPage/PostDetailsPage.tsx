import { useParams } from 'react-router-dom';

export const PostDetailsPage = () => {
   const { id } = useParams();
   return <h2>Подробности поста #{id}</h2>;
};