import { RouterProvider } from "react-router-dom";
import { router } from "./providers/router/Router";

export const App = () => {
  return (
    <RouterProvider router={router}/>
  )
}
