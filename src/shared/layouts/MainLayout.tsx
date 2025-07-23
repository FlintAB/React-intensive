import type { FC } from "react"
import { LayoutFooter } from "../../widgets/LayoutFooter/ui/Footer"
import { LayoutHeader } from "../../widgets/LayoutHeader/ui/Header"
import { useOutlet } from "react-router-dom";

export const MainLayout: FC = () => {
   const outlet = useOutlet();

   return (
   <>
      <LayoutHeader/>
      <main>
         {outlet || <h2>Главная страница</h2>}
      </main>
      <LayoutFooter/>
   </>
   )
}