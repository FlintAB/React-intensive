import { type FC } from 'react';

export const withLoading = <T extends object>(
   Component: FC<T>,
   LoadingComponent: FC = () => <div>Loading...</div>
) => {
   const WithLoading: FC<T & { isLoading?: boolean }> = ({ isLoading, ...props }) => {
      return isLoading ? <LoadingComponent /> : <Component {...(props as T)} />;
   };

   return WithLoading;
};