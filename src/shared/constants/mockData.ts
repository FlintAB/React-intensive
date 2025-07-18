import type { Album, AlbumPhoto } from "../types/album";
import type { Post } from "../types/post";
import type { Todo } from "../types/todo";

export const mockPosts: Post[] = [
   { id: 1, title: "Заголовок", body: "Content 1", userId: 1 },
   { id: 2, title: "Заголовок", body: "Content 2", userId: 1 },
   { id: 3, title: "Заголовок", body: "Content 3", userId: 2 },
];

export const mockAlbums: Album[] = [
   { id: 1, title: "Album 1", userId: 1 },
   { id: 2, title: "Album 2", userId: 1 },
   { id: 3, title: "Album 3", userId: 2 },
];

export const mockPhotos: AlbumPhoto[] = [
   { id: 1, albumId: 1, title: "Photo 1", url: "url1", thumbnailUrl: "thumb1" },
   { id: 2, albumId: 1, title: "Photo 2", url: "url2", thumbnailUrl: "thumb2" },
   { id: 3, albumId: 2, title: "Photo 3", url: "url3", thumbnailUrl: "thumb3" },
];

export const mockTodos: Todo[] = [
   { id: 1, title: "Todo 1", completed: false, userId: 1 },
   { id: 2, title: "Todo 2", completed: true, userId: 1 },
   { id: 3, title: "Todo 3", completed: false, userId: 2 },
];