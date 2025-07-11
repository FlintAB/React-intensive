import { useState } from "react";
import { PostLengthFilter } from "../../../features/PostLengthFilter/ui/PostLengthFilter";
import { mockPosts } from "../../../widgets/PostList/model/MockPosts";
import { PostList } from "../../../widgets/PostList/PostList";


export const PostsPage = () => {
   const [filteredPosts, setFilteredPosts] = useState(mockPosts);

   return (
      <>
         <PostLengthFilter 
         posts={mockPosts} 
         onFilter={setFilteredPosts} 
         />
         <PostList posts={filteredPosts} />
      </>
   );
};