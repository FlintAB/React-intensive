import { useState, type FC } from 'react';
import { filterByLength } from '../lib/filterByLength';
import { Button } from '../../../shared/ui/Button/Button';
import styles from './PostLengthFilter.module.css';
import type { Post } from '../../../shared/types/post';

type PostLengthFilterProps = {
   posts: Post[];
   onFilter: (arg: Post[]) => void;
}

export const PostLengthFilter: FC<PostLengthFilterProps> = ({ posts, onFilter }) => {
   const [maxLength, setMaxLength] = useState(6);

   const handleFilter = () => {
      const filtered = filterByLength(posts, maxLength);
      onFilter(filtered);
   };

   return (
      <div className={styles.container}>
         <div className={styles.controls}>

         <label>
               Длина заголовка:
            <input
               type="number"
               min="1"
               value={maxLength}
               onChange={(e) => setMaxLength(Number(e.target.value))}
               onKeyUp={(e) => e.key === 'Enter' && handleFilter()}
            />
            </label>

            <Button onClick={handleFilter}>Отфильтровать</Button>
         </div>
      </div>
   );
};