import { PostCard } from "../../entities/post/ui/PostCard";
import { withLoading } from "../../shared/lib/hoc/withLoading";
import { CommentList } from "../CommentList/ui/CommentList";
import { mockPosts } from "./model/MockPosts";


export const PostList = withLoading(function PostList() {
   return (
      <ul>
         {mockPosts.map((post) => (
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
});