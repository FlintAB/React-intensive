import type { PostCardProps } from "../../../entities/post/ui/PostCard";

export const filterByLength = (posts: PostCardProps[], maxLength: number) => {
   return posts.filter(post => 
      post.title.length == maxLength
   );
};