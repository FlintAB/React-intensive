export type Album = {
   id: number;
   title: string;
   author: number;
};

export type AlbumPhoto = {
   id: number;
   albumId: number;
   title: string;
   url: string;
   thumbnailUrl: string;
};