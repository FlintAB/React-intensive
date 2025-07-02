import type { FC, ReactNode } from "react"
import { LayoutFooter } from "../../widgets/LayoutFooter/Footer"
import { LayoutHeader } from "../../widgets/LayoutHeader/Header"

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