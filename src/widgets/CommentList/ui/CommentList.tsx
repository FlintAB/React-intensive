import { useState, useCallback, memo } from 'react';
import { Button } from '../../../shared/ui/Button/Button';
import styles from './CommentList.module.css';

type Comment = {
   id: string;
   text: string;
}

export const CommentList = memo(({ comments }: { comments: Comment[] }) => {
   const [expandedComments, setExpandedComments] = useState<Record<string, boolean>>({});

   const toggleComment = useCallback((commentId: string) => {
      setExpandedComments(prev => ({
         ...prev,
         [commentId]: !prev[commentId]
      }));
   }, []);

   return (
      <div>
         {comments.map(comment => (
         <div key={comment.id}>
            <Button onClick={() => toggleComment(comment.id)}>
               {expandedComments[comment.id] ? 'Скрыть комментарии' : 'Показать комментарии'}
            </Button>
            {expandedComments[comment.id] && (
               <div className={styles.content}>{comment.text}</div>
            )}
         </div>
         ))}
      </div>
   );
});