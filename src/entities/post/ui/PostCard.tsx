import type { FC } from "react";

type PostCardProps = {
   title: string;
   body: string;
   id: number;
}

export const PostCard: FC<PostCardProps> = ({title, body, id}) => {
   return (
      <div>
         <h3>{title}</h3>
         <p>{body}</p>
         <small>Post ID: {id}</small>
      </div>
   )
}