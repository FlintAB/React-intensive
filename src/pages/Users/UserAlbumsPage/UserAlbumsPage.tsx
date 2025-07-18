import { Link, useParams } from 'react-router-dom';
import styles from './UserAlbumsPage.module.css';
import { useGetAlbumByUserQuery } from '../../../entities/album/api/albumApi';

export const UserAlbumsPage = () => {
   const { id } = useParams<{ id: string }>();
   const {data: albums, isLoading, error} = useGetAlbumByUserQuery(Number(id));

   if (isLoading) return <div>Загрузка...</div>;
   if (error) return <div>Ошибка при получении списка альбомов</div>;

   return (
      <div className={styles.container}>

         <h2>Альбомы пользователя #{id}</h2>

         {albums?.length ? (
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
            <p>У автора нет альбомов</p>
         )}

      </div>
   );
};