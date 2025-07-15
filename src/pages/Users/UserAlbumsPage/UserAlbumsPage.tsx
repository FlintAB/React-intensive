import { Link, useParams } from 'react-router-dom';
import styles from './UserAlbumsPage.module.css';
import { useMockData } from '../../../features/PostList/model/hooks/usePosts';

export const UserAlbumsPage = () => {
   const { id } = useParams<{ id: string }>();
   const { getAlbumsByAuthor, isLoading, error } = useMockData();
   const albums = id ? getAlbumsByAuthor(id) : [];

   if (isLoading) return <div>Загрузка...</div>;
   if (error) return <div>{error}</div>;

   return (
      <div className={styles.container}>
         <h2>Альбомы пользователя #{id}</h2>
         {albums.length > 0 ? (
         <div className={styles.albumsGrid}>
            {albums.map(album => (
               <div key={album.id} className={styles.albumCard}>
               <h3>{album.title}</h3>
               <p>ID альбома: {album.id}</p>
               <Link 
                  to={`/albums/${album.id}/photos`}
                  className={styles.viewPhotosLink}
                  >
                  Просмотреть фотографии
               </Link>
            </div>
            ))}
         </div>
         ) : (
         <p>У пользователя нет альбомов</p>
         )}
      </div>
   );
};