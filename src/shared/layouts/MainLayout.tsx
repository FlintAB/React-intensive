import { LayoutFooter } from "../../widgets/LayoutFooter/Footer"
import { LayoutHeader } from "../../widgets/LayoutHeader/Header"
import { PostList } from "../../widgets/PostList/PostList"

export const MainLayout: React.FC = () => {
   return (
   <>
      <LayoutHeader/>
      <main>
         <PostList/>
      </main>
      <LayoutFooter/>
   </>
   )
}