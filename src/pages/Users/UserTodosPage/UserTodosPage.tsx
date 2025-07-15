import { useParams } from 'react-router-dom';
import styles from './UserTodosPage.module.css';
import { useMockData } from '../../../features/PostList/model/hooks/usePosts';

export const UserTodosPage = () => {
   const { id } = useParams<{ id: string }>();
   const { getTodosByAuthor, isLoading, error } = useMockData();
   const todos = id ? getTodosByAuthor(id) : [];

   if (isLoading) return <div>Загрузка...</div>;
   if (error) return <div>{error}</div>;

   return (
      <div className={styles.container}>
         <h2>Задачи пользователя #{id}</h2>
         {todos.length > 0 ? (
         <ul className={styles.todosList}>
            {todos.map(todo => (
               <li key={todo.id} className={styles.todoItem}>
               <input 
                  type="checkbox" 
                  checked={todo.completed} 
                  readOnly 
               />
               <span className={todo.completed ? styles.completed : ''}>
                  {todo.title}
               </span>
               </li>
            ))}
         </ul>
         ) : (
         <p>У пользователя нет задач</p>
         )}
      </div>
   );
};