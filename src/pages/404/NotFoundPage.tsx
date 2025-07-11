import { Link } from "react-router-dom";

export const NotFoundPage = () => {
   return (
      <>
      <h2>404 - Страница не найдена</h2>
      <Link to="/">Вернуться на главную</Link>
      </>
   );
};