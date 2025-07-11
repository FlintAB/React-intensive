import { useParams } from 'react-router-dom';

export const AlbumPhotosPage = () => {
   const { id } = useParams();
   return <h2>Фото альбома #{id}</h2>;
};