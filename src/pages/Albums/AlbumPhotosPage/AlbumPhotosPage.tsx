import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useGetPhotoByAlbumQuery } from '../../../entities/photo/api/photoApi';
import { useGetAlbumByIdQuery } from '../../../entities/album/api/albumApi';
import styles from '../AlbumPhotosPage/AlbumPhotospage.module.css';
import type { FC } from 'react';

export const AlbumPhotosPage: FC = () => {
   const { id } = useParams<{ id: string }>();
   const {data: photos, isLoading, error} = useGetPhotoByAlbumQuery(Number(id));
   const {data: album} = useGetAlbumByIdQuery(Number(id));

   if (isLoading) return <div>Загрузка...</div>;
   if (error) return <div>Ошибка при получении фото</div>;
   if (!album) return <div>Альбом не найден</div>;

   return (
      <div className={styles.container}>
         <h2>Фото из альбома: {album.title}</h2>
         <p className={styles.authorInfo}>
         Автор: <Link to={`/users/${album.userId}/albums`}>Пользователь #{album.userId}</Link>
         </p>

         {photos?.length ? (
            <div className={styles.photosGrid}>
               {photos.map(photo => (
                  <div key={photo.id} className={styles.photoCard}>
                     <img 
                        src={photo.thumbnailUrl} 
                        alt={photo.title}
                        className={styles.thumbnail}
                     />
                     <h3>{photo.title}</h3>
                     <a 
                        href={photo.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={styles.fullSizeLink}
                     >
                        Посмотреть оригинал
                     </a>
                  </div>
               ))}
            </div>
         ) : (
            <p>В этом альбоме нет фотографий</p>
         )}

         <div className={styles.backLink}>
         <Link to={`/users/${album.userId}/albums`}>← Назад к альбомам пользователя</Link>
         </div>
      </div>
   );
};