import type { FC } from "react";
import { Link } from "react-router-dom";
import styles from "./PostCard.module.css";
import { CommentList } from "../../../widgets/CommentList/ui/CommentList";
import type { Post } from "../../../shared/types/post";


export const PostCard: FC<Post> = ({title, body, id, userId}) => {
   return (
      <div className={styles.layout}>
         <h1>{title}</h1>
         <h2>Пост пользователя с id: {userId}</h2>
         <Link to={`/users/${userId}/posts`}>
            <h3>Страница пользователя</h3>
         </Link>
         <Link to={`/posts/${id}`}>
            <h3>Подробности поста: {title}</h3>
         </Link>
         <p>{body}</p>
         <small>Post ID: {id}</small>
         <CommentList comments={[{
               text: 'Пример комментария',
               id: ""
         }]}/>
      </div>
   )
}