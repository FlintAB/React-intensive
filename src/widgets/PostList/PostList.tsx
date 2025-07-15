import type { FC } from "react";
import { PostCard } from "../../entities/post/ui/PostCard";
import { withLoading } from "../../shared/lib/hoc/withLoading";
import type { Post } from "../../shared/types/post";


type PostListProps = {
   posts: Post[];
   isLoading?: boolean;
}

const PostListComponent: FC<PostListProps> = ({ posts }) => {
   return (
      <ul>
         {posts.map((post) => (
         <li key={post.id}>
            <PostCard {...post}/>
         </li>
         ))}
      </ul>
   );
};

export const PostList = withLoading(PostListComponent);