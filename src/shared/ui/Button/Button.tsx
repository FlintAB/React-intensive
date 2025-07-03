import type { ReactNode } from "react";

type ButtonProps = {
   onClick: () => void;
   children?: ReactNode;
}

export const Button = ({ onClick, children }: ButtonProps) => {
   return (
      <button onClick={(e) => {
         e.stopPropagation();
         onClick();
      }}>
         {children}
      </button>
   )
}