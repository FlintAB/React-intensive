import { useState } from 'react';
import { Button } from '../../../shared/ui/Button/Button';

export type Comment = {
   postId: number;
   id: number;
   name: string;
   email: string;
   body: string;
}

type CommentListProps = {
   postId: number;
   comments: Comment[];
};

export const CommentList = ({ postId, comments }: CommentListProps) => {
   const [showComments, setShowComments] = useState(false);

   const toggleComments = () => setShowComments(prev => !prev);


   const postComments = comments.filter(comment => comment.postId === postId);

return (
   <div>
      {postComments.length > 0 && (
         <>
            <Button onClick={toggleComments}>
               {showComments ? 'Скрыть комментарии' : 'Показать комментарии'}
            </Button>

            {showComments && (
               <div>
               {postComments.map(comment => (
                  <div key={comment.id}>
                     <h4>{comment.name}</h4>
                     <p>{comment.body}</p>
                     <small>{comment.email}</small>
                  </div>
               ))}
               </div>
            )}
         </>
         )}
      </div>
   );
};