'use client';

import { useEffect } from 'react';
import { useCasinoStore } from '../../store/index';
import { Input } from '../Input/Input';
import s from './PopularCasinos.module.css';
import Image from 'next/image';

export const PopularCasinos = () => {
  const {
    casinoList,
    searchResults,
    setSearchResults,
    searchQuery,
    setSearchQuery,
  } = useCasinoStore();

   useEffect(() => {
     setSearchResults(
       casinoList?.data
         ? casinoList.data.filter((casino) =>
             casino.name.toLowerCase().startsWith(searchQuery.toLowerCase())
           )
         : []
     );
   }, [searchQuery, casinoList, setSearchResults]);

  return (
    <div className={s.container}>
      <div className={s.title}>Popular casinos</div>
      <Input value={searchQuery} onChange={setSearchQuery} />
      {casinoList?.data !== null ? (
        <>
          {searchResults.length !== 0 ? (
            <div className={s.wrapper_data}>
              {searchResults.map((casino) => (
                <div key={casino.id} className={s.block}>
                  <Image
                    className={s.image}
                    src={casino.photo}
                    width={0}
                    height={0}
                    sizes="100vw"
                    alt="image"
                  />
                  <div className={s.name}>{casino.name}</div>
                  <div className={s.description}>{casino.description}</div>
                </div>
              ))}
            </div>
          ) : (
            <div className={s.text}>No results...</div>
          )}
        </>
      ) : (
        <div className={s.text}>Loading...</div>
      )}
    </div>
  );
};
