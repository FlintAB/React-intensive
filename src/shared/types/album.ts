export type Album = {
   userId: number;
   id: number;
   title: string;
};

export type AlbumPhoto = {
   id: number;
   albumId: number;
   title: string;
   url: string;
   thumbnailUrl: string;
};