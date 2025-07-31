import type { PostCardProps } from "../../../entities/post/ui/PostCard";

export const filterByLength = (posts: PostCardProps[], minLength: number, maxLength: number) => {
   return posts.filter(post => 
      post.title.length >= minLength && post.title.length <= maxLength
   );
};