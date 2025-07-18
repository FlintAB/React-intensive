import { useState, memo } from 'react';
import styles from './CommentList.module.css';
import { Button } from '../../../shared/ui/Button/Button';
import { useGetCommentsByPostQuery } from '../../../entities/comment/api/commentApi';

export const CommentList = memo(({ postId }: { postId: number }) => {
   const [showComments, setShowComments] = useState(false);
   const { data: comments, isLoading, error } = useGetCommentsByPostQuery(postId);

   const toggleComments = () => setShowComments(prev => !prev);

   return (
      <div className={styles.container}>
         <Button onClick={toggleComments}>
         {showComments ? 'Скрыть комментарии' : 'Показать комментарии'}
         </Button>

      {showComments && (
         <div className={styles.comments}>
            {isLoading ? (
               <div>Загрузка комментариев...</div>
            ) : error ? (
               <div>Ошибка загрузки</div>
            ) : (
            comments?.map(comment => (
               <div key={comment.id} className={styles.comment}>
                  <h4 className={styles.author}>{comment.name}</h4>
                  <p className={styles.text}>{comment.body}</p>
                  <small className={styles.email}>{comment.email}</small>
               </div>
               ))
            )}
         </div>
         )}
      </div>
   );
});