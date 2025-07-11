import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { MainLayout } from "../../../shared/layouts/MainLayout";
import { PostDetailsPage } from "../../../pages/Posts/PostDetailsPage/PostDetailsPage";
import { PostsPage } from "../../../pages/Posts/PostsPages/PostPages";
import { AlbumPhotosPage } from "../../../pages/Albums/AlbumPhotosPage/AlbumPhotosPage";
import { UserAlbumsPage } from "../../../pages/Users/UserAlbumsPage/UserAlbumsPage";
import { UserTodosPage } from "../../../pages/Users/UserTodosPage/UserTodosPage";
import { UserPostsPage } from "../../../pages/Users/UserPostsPage/UserPostsPage";
import { NotFoundPage } from "../../../pages/404/NotFoundPage";

export const router = createBrowserRouter(createRoutesFromElements(
   
   <Route path="/" element={<MainLayout />}>

      <Route path="posts">
         <Route index element={<PostsPage/>} />
         <Route path=":id" element={<PostDetailsPage/>} />
      </Route>


      <Route path="albums">
         <Route path=":id/photos" element={<AlbumPhotosPage/>} />
      </Route>


      <Route path="users/:id">
         <Route path="albums" element={<UserAlbumsPage/>} />
         <Route path="todos" element={<UserTodosPage/>} />
         <Route path="posts" element={<UserPostsPage/>} />
      </Route>


      <Route path="*" element={<NotFoundPage/>} />
   </Route>
))