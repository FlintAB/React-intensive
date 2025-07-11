import { useParams } from 'react-router-dom';

export const UserAlbumsPage = () => {
   const { id } = useParams();
   return <h2>Альбомы пользователя #{id}</h2>;
};