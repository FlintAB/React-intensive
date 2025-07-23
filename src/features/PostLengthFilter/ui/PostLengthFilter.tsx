import { useState, type FC } from 'react';
import { filterByLength } from '../lib/filterByLength';
import type { PostCardProps } from '../../../entities/post/ui/PostCard';
import { Button } from '../../../shared/ui/Button/Button';
import styles from './PostLengthFilter.module.css';

type PostLengthFilterProps = {
   posts: PostCardProps[];
   onFilter: (arg: PostCardProps[]) => void;
}

export const PostLengthFilter: FC<PostLengthFilterProps> = ({ posts, onFilter }) => {
   const [minLength, setMinLength] = useState(1);
   const [maxLength, setMaxLength] = useState(3);

   const handleFilter = () => {
      const filtered = filterByLength(posts, minLength, maxLength);
      onFilter(filtered);
   };

   return (
      <div className={styles.container}>
         <div className={styles.controls}>

            <label>
               Фильтрация постов по длине заголовка:
               <div className={styles.rangeInputs}>
                  <input
                     type="number"
                     min="1"
                     placeholder="От"
                     value={minLength}
                     onChange={(e) => setMinLength(Number(e.target.value))}
                     onKeyUp={(e) => e.key === 'Enter' && handleFilter()}
                  />
                  <span>-</span>
                  <input
                     type="number"
                     min={minLength}
                     placeholder="До"
                     value={maxLength}
                     onChange={(e) => setMaxLength(Number(e.target.value))}
                     onKeyUp={(e) => e.key === 'Enter' && handleFilter()}
                  />
               </div>
            </label>

            <Button onClick={handleFilter}>Отфильтровать</Button>
         </div>
      </div>
   );
};