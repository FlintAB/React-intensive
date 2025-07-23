import { useEffect, useState } from "react";
import { PostLengthFilter } from "../../../features/PostLengthFilter/ui/PostLengthFilter";
import { PostList } from "../../../widgets/PostList/PostList";
import { useGetPostsQuery } from "../../../entities/post/api/postApi";


export const PostsPage = () => {
   const { data: posts = [], isLoading, error } = useGetPostsQuery();
   const [filteredPosts, setFilteredPosts] = useState(posts);

   useEffect(() => {
      setFilteredPosts(posts);
   }, [posts]);

   if (isLoading) return <div>Loading posts...</div>;
   if (error) return <div>Error loading posts</div>;
   if (!filteredPosts.length) return <div>Нет постов с такой длиной заголовка</div>;

   return (
      <>
         <PostLengthFilter 
         posts={posts} 
         onFilter={setFilteredPosts} 
         />
         <PostList posts={filteredPosts} />
      </>
   );
};