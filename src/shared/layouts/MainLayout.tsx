import type { FC, ReactNode } from "react"
import { LayoutFooter } from "../../widgets/LayoutFooter/ui/Footer"
import { LayoutHeader } from "../../widgets/LayoutHeader/ui/Header"

type MainLayoutProps = {
   children?: ReactNode;
}

export const MainLayout: FC<MainLayoutProps> = ({ children }) => {
   return (
   <>
      <LayoutHeader/>
      <main>
      {children}
      </main>
      <LayoutFooter/>
   </>
   )
}