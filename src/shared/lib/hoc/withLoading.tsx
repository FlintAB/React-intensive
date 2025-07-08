import { type FC } from 'react';

export const withLoading = <P extends object>(
   Component: FC<P>,
   LoadingComponent: FC = () => <div>Loading...</div>
) => {
   const WithLoading: FC<P & { isLoading?: boolean }> = ({ isLoading, ...props }) => {
      return isLoading ? <LoadingComponent /> : <Component {...(props as P)} />;
   };

   return WithLoading;
};