import type { FC } from "react";
import { PostCard, type PostCardProps } from "../../entities/post/ui/PostCard";
import { withLoading } from "../../shared/lib/hoc/withLoading";
import { CommentList } from "../CommentList/ui/CommentList";

type PostListProps = {
   posts: PostCardProps[];
   isLoading?: boolean;
}

const PostListComponent: FC<PostListProps> = ({ posts }) => {
   return (
      <ul>
         {posts.map((post) => (
         <li key={post.id}>
            <PostCard {...post}/>
            <CommentList comments={[{
               text: 'Пример комментария',
               id: ""
            }]}/>
         </li>
         ))}
      </ul>
   );
};

export const PostList = withLoading(PostListComponent);