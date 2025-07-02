import { PostCard } from "../../entities/post/ui/PostCard";
import type { FC } from "react";

const mockPosts = [
   { id: 1, title: "Post 1", body: "This is post 1" },
   { id: 2, title: "Post 2", body: "This is post 2" },
   { id: 3, title: "Post 3", body: "This is post 3" },
];

export const PostList: FC = () => {
   return (
      <ul>
         {mockPosts.map((post) => (
         <li key={post.id}>
            <PostCard {...post}/>
         </li>
         ))}
      </ul>
   )
}