import { useParams } from 'react-router-dom';

export const UserTodosPage = () => {
   const { id } = useParams();
   return <h2>Задачи пользователя #{id}</h2>;
};