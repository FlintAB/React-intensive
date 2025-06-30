import type React from "react"

type PostCardProps = {
   title: string;
   body: string;
   id: number;
}

export const PostCard: React.FC<PostCardProps> = ({title, body, id}) => {
   return (
      <div>
         <h3>{title}</h3>
         <p>{body}</p>
         <small>Post ID: {id}</small>
      </div>
   )
}