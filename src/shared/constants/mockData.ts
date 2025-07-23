import type { Album, AlbumPhoto } from "../types/album";
import type { Post } from "../types/post";
import type { Todo } from "../types/todo";

export const mockPosts: Post[] = [
   { id: 1, title: "Post 1", body: "Content 1", author: 1 },
   { id: 2, title: "Post 2", body: "Content 2", author: 1 },
   { id: 3, title: "Post 3", body: "Content 3", author: 2 },
];

export const mockAlbums: Album[] = [
   { id: 1, title: "Album 1", author: 1 },
   { id: 2, title: "Album 2", author: 1 },
   { id: 3, title: "Album 3", author: 2 },
];

export const mockPhotos: AlbumPhoto[] = [
   { id: 1, albumId: 1, title: "Photo 1", url: "url1", thumbnailUrl: "thumb1" },
   { id: 2, albumId: 1, title: "Photo 2", url: "url2", thumbnailUrl: "thumb2" },
   { id: 3, albumId: 2, title: "Photo 3", url: "url3", thumbnailUrl: "thumb3" },
];

export const mockTodos: Todo[] = [
   { id: 1, title: "Todo 1", completed: false, author: 1 },
   { id: 2, title: "Todo 2", completed: true, author: 1 },
   { id: 3, title: "Todo 3", completed: false, author: 2 },
];