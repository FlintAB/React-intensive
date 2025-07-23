import { type FC, type ReactNode } from "react"

type BodyProps = {
   children?: ReactNode;
}

const Body: FC<BodyProps> = ({ children }) => {
   return (
      <>
      {children}
      </>
   )
};

export default Body;