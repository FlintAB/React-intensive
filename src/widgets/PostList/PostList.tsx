import type { FC } from "react";
import { PostCard, type PostCardProps } from "../../entities/post/ui/PostCard";
import { withLoading } from "../../shared/lib/hoc/withLoading";
import { CommentList, type Comment } from "../CommentList/ui/CommentList";

type PostListProps = {
   posts: PostCardProps[];
   isLoading?: boolean;
}

const MOCK_COMMENTS: Comment[] = [
   {
      postId: 1,
      id: 1,
      name: "User One",
      email: "user1@example.com",
      body: "Комментарий к посту 1"
   },
   {
      postId: 1,
      id: 2,
      name: "User Two",
      email: "user2@example.com",
      body: "Еще один комментарий к посту 1"
   },
   {
      postId: 2,
      id: 3,
      name: "User Three",
      email: "user3@example.com",
      body: "Комментарий к посту 2"
   }
];

const PostListComponent: FC<PostListProps> = ({ posts }) => {

   return (
      <ul>
         {posts.map((post) => (
         <li key={post.id}>
            <PostCard {...post}/>
            <CommentList            
               postId={post.id} 
               comments={MOCK_COMMENTS}/>
         </li>
         ))}
      </ul>
   );
};

export const PostList = withLoading(PostListComponent);