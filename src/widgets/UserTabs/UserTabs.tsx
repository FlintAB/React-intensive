import { NavLink, useParams } from 'react-router-dom';
import styles from './UserTabs.module.css';

export const UserTabs = () => {
   const { id } = useParams<{id: string}>();

   const tabs = [
      { path: `posts`, label: 'Посты юзера' },
      { path: `albums`, label: 'Альбомы юзера' },
      { path: `todos`, label: 'Задачи юзера' }
   ];

   return (
      <nav className={styles.tabs}>

         <NavLink to='/posts' className={({ isActive }) => 
               isActive ? `${styles.link} ${styles.active}` : styles.link
            }>Все посты
         </NavLink>

         {tabs.map((tab) => (
         <NavLink
            key={tab.path}
            to={`/users/${id}/${tab.path}`}
            className={({ isActive }) => 
               isActive ? `${styles.link} ${styles.active}` : styles.link
            }
            end
         >
            {tab.label}
         </NavLink>

         ))}
      </nav>
   );
};