import { useState, type FC } from 'react';
import { filterByLength } from '../lib/filterByLength';
import { Button } from '../../../shared/ui/Button/Button';
import styles from './PostLengthFilter.module.css';
import type { Post } from '../../../entities/post/model/types'; 

type PostLengthFilterProps = {
   posts: Post[];
   onFilter: (arg: Post[]) => void;
}

export const PostLengthFilter: FC<PostLengthFilterProps> = ({ posts, onFilter }) => {
   const [maxLength, setMaxLength] = useState(9);

   const handleFilter = () => {
      const filtered = filterByLength(posts, maxLength);
      onFilter(filtered);
   };

   const handleMinLengthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setMaxLength(Number(e.target.value));
   };
   
   const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
         handleFilter();
      }
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
               onChange={handleMinLengthChange}
               onKeyUp={handleKeyUp}
            />
            </label>

            <Button onClick={handleFilter}>Отфильтровать</Button>
         </div>
      </div>
   );
};