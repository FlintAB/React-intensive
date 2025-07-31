import type { FC, ReactNode } from "react"

type FooterProps = {
   children?: ReactNode
}

const Footer: FC<FooterProps> = ({ children }) => {
   return(
      <>
         {children}
      </>
   )
};

export default Footer;