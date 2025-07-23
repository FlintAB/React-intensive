import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useMockData } from '../../../features/PostList/model/hooks/usePosts';
import styles from '../AlbumPhotosPage/AlbumPhotospage.module.css';

export const AlbumPhotosPage = () => {
   const { id } = useParams<{ id: string }>();
   const { getAlbumById, getPhotosByAlbum, isLoading, error } = useMockData();

   const album = id ? getAlbumById(id) : null;
   const photos = id ? getPhotosByAlbum(id) : [];

   if (isLoading) return <div>Загрузка...</div>;
   if (error) return <div>{error}</div>;
   if (!album) return <div>Альбом не найден</div>;

   return (
      <div className={styles.container}>
         <h2>Фото из альбома: {album.title}</h2>
         <p className={styles.authorInfo}>
         Автор: <Link to={`/users/${album.author}/albums`}>Пользователь #{album.author}</Link>
         </p>

         {photos.length > 0 ? (
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
         <Link to={`/users/${album.author}/albums`}>← Назад к альбомам пользователя</Link>
         </div>
      </div>
   );
};