import type { FC } from "react";
import { PostCard } from "../../entities/post/ui/PostCard";
import { withLoading } from "../../shared/lib/hoc/withLoading";
import type { Post } from "../../shared/types/post";
import { useGetPostsQuery } from "../../entities/post/api/postApi";


type PostListProps = {
   posts: Post[];
   isLoading?: boolean;
}

const PostListComponent: FC<PostListProps> = () => {
   const { data: posts, error } = useGetPostsQuery();

   if (error) return <div>Ошибка загрузки постов</div>;

   return (
      <ul>
         {posts?.map((post) => (
         <li key={post.id}>
            <PostCard {...post}/>
         </li>
         ))}
      </ul>
   );
};

export const PostList = withLoading(PostListComponent);