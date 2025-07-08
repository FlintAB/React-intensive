import { PostCard } from "../../entities/post/ui/PostCard";
import { withLoading } from "../../shared/lib/hoc/withLoading";
import { mockPosts } from "./model/MockPosts";


export const PostList = withLoading(function PostList() {
   return (
      <ul>
         {mockPosts.map((post) => (
         <li key={post.id}>
            <PostCard {...post}/>
         </li>
         ))}
      </ul>
   );
});