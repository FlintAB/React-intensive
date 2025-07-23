import type { PropsWithChildren } from "react";

type ButtonProps = {
   onClick: () => void;
}

export const Button = (props: PropsWithChildren<ButtonProps>) => {
   const { onClick, children } = props;

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