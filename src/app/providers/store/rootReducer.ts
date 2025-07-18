import { albumReducer } from "../../../entities/album/model/slice/albumSlice";
import { commentReducer } from "../../../entities/comment/model/slice/commentSlice";
import { photoReducer } from "../../../entities/photo/model/slice/photoSlice";
import { postReducer } from "../../../entities/post/model/slice/postSlice";
import { todoReducer } from "../../../entities/todo/model/slice/todoSlice";
import { userReducer } from "../../../entities/user/model/slice/userSlice";
import { baseApi } from "../../../shared/api/baseApi";

export const rootReducer = {
   [baseApi.reducerPath]: baseApi.reducer,
   posts: postReducer, 
   users: userReducer, 
   albums: albumReducer,
   todos: todoReducer,
   photos: photoReducer,
   comments: commentReducer,
}