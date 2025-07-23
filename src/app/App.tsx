import { useState } from "react";
import { MainLayout } from "../shared/layouts/MainLayout"
import { mockPosts } from "../widgets/PostList/model/MockPosts";
import { PostList } from "../widgets/PostList/PostList"
import { PostLengthFilter } from "../features/PostLengthFilter/ui/PostLengthFilter";

export const App = () => {
  const [filteredPosts, setFilteredPosts] = useState(mockPosts);

  return (
    <MainLayout>
      <PostList posts={filteredPosts}/>
      <PostLengthFilter posts={mockPosts} onFilter={setFilteredPosts}/>
    </MainLayout>
  )
}
