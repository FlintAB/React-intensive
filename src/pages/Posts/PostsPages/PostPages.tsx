import { useState } from "react";
import { PostLengthFilter } from "../../../features/PostLengthFilter/ui/PostLengthFilter";
import { PostList } from "../../../widgets/PostList/PostList";
import { mockPosts } from "../../../shared/constants/mockData";


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