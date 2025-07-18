import type { FC } from "react";
import { Link } from "react-router-dom";
import styles from "./PostCard.module.css";
import type { Post } from "../../../shared/types/post";
import { CommentList } from "../../../widgets/CommentList/ui/CommentList";


export const PostCard: FC<Post> = ({ title, body, id, userId }) => {
   return (
      <div className={styles.layout}>
         <h1 className={styles.title}>{title}</h1>
         <h2 className={styles.user}>Пост пользователя с id: {userId}</h2>
      
         <div className={styles.links}>
         <Link to={`/users/${userId}/posts`} className={styles.link}>
            <h3>Страница пользователя</h3>
         </Link>
         <Link to={`/posts/${id}`} className={styles.link}>
            <h3>Подробности поста: {title}</h3>
         </Link>
      </div>
      
      <p className={styles.body}>{body}</p>
      <small className={styles.id}>Post ID: {id}</small>
      
      <CommentList postId={id} />
      </div>
   );
};