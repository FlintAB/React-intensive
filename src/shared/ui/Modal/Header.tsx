import type { FC, ReactNode } from "react";

type HeaderProps = {
   children?: ReactNode;
}

const Header: FC<HeaderProps> = ({ children }) => {
   return (
      <>
         {children}
      </>
   )
}

export default Header;