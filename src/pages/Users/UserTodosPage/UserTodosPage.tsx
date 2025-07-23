import { useParams } from 'react-router-dom';
import styles from './UserTodosPage.module.css';
import { useGetTodosByUserQuery } from '../../../entities/todo/api/todoApi';
import type { FC } from 'react';

export const UserTodosPage: FC = () => {
   const { id } = useParams<{ id: string }>();
   const { data: todos, isLoading, error } = useGetTodosByUserQuery(Number(id));

   if (isLoading) return <div>Загрузка...</div>;
   if (error) return <div>Ошибка при получении списка задач</div>;

   return (
      <div className={styles.container}>
         <h2>Задачи пользователя #{id}</h2>

         {todos?.length ? (
            <ul>
               {todos.map(todo => (
                  <li key={todo.id} className={styles.todoItem}>

                     <input type="checkbox" checked={todo.completed} readOnly />

                     <span className={todo.completed ? styles.completed : ''}>
                        {todo.title}
                     </span>

                  </li>
               ))}
            </ul>
         ) : (
            <p>У данного автора нет списка задач</p>
         )}

      </div>
   );
};