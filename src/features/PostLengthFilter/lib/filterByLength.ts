import type { Post } from "../../../shared/types/post";

export const filterByLength = (posts: Post[], maxLength: number) => {
   return posts.filter(post => 
      post.title.length == maxLength
   );
};