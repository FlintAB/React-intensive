import type { FC } from "react";
import { PostCard, type PostCardProps } from "../../entities/post/ui/PostCard";
import { withLoading } from "../../shared/lib/hoc/withLoading";
import { CommentList } from "../CommentList/ui/CommentList";

type PostListProps = {
   posts: PostCardProps[];
   isLoading?: boolean;
}

const MOCK_COMMENTS = [
   {
      id: "1",
      text: "Пример комментария"
   }
];

const PostListComponent: FC<PostListProps> = ({ posts }) => {
   return (
      <ul>
         {posts.map((post) => (
         <li key={post.id}>
            <PostCard {...post}/>
            <CommentList comments={MOCK_COMMENTS}/>
         </li>
         ))}
      </ul>
   );
};

export const PostList = withLoading(PostListComponent);