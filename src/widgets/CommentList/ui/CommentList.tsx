import { useState } from 'react';
import { Button } from '../../../shared/ui/Button/Button';
import styles from './CommentList.module.css';

type Comment = {
   id: string;
   text: string;
}

type CommentListProps = {
   comments: Comment[];
};

export const CommentList = ({ comments }: CommentListProps) => {
   const [expandedComments, setExpandedComments] = useState<Record<string, boolean>>({});

   const toggleComment = (commentId: string) => {
      setExpandedComments(prev => ({
         ...prev,
         [commentId]: !prev[commentId]
      }));
   };

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
};