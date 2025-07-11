import type { ReactNode } from "react";

type ButtonProps = {
   onClick: () => void;
   children?: ReactNode;
}

export const Button = ({ onClick, children }: ButtonProps) => {
   const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();
      onClick();
   };

   return (
      <button onClick={handleClick}>
         {children}
      </button>
   )
}