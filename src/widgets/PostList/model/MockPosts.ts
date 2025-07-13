export type Post = {
   id: number;
   title: string;
   body: string;
   author: number;
}

export const mockPosts: Post[] = [
   {
      id: 1, title: "Post 1", body: "This is post 1",
      author: 1
   },
   {
      id: 2, title: "Post 2", body: "This is post 2",
      author: 1
   },
   {
      id: 3, title: "Post 3", body: "This is post 3",
      author: 2
   },
];