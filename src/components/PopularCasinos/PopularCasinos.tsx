'use client';

import { useEffect, useState } from 'react';
import { useCasinoStore } from '../../store/index';
import { Input } from '../Input/Input';
import s from './PopularCasinos.module.css';
import { Casino } from '@/types';

export const PopularCasinos = () => {
  const { casinoList } = useCasinoStore();
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [filteredCasinos, setFilteredCasinos] = useState<Casino[]>([]);

   useEffect(() => {
     setFilteredCasinos(
       casinoList?.data
         ? casinoList.data.filter((casino) =>
             casino.name.toLowerCase().startsWith(searchQuery.toLowerCase())
           )
         : []
     );
   }, [searchQuery, casinoList]);

  return (
    <div className={s.container}>
      <div className={s.title}>Popular casinos</div>
      <Input onSearch={setSearchQuery} />
      {casinoList?.data !== null ? (
        <div className={s.wrapper_data}>
          {filteredCasinos.map((casino) => (
            <div key={casino.id} className={s.block}>
              <img className={s.image} src={casino.photo} alt="image" />
              <div className={s.name}>{casino.name}</div>
              <div className={s.description}>{casino.description}</div>
            </div>
          ))}
        </div>
      ) : (
        <div className={s.text}>Loading...</div>
      )}
    </div>
  );
};
