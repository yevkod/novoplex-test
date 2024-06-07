'use client';

import s from './page.module.scss';
import { Header } from '@/components/Header/Header';
import { PopularCasinos } from '@/components/PopularCasinos/PopularCasinos';
import { useEffect } from 'react';
import { dataRequest } from '@/services/Data';
import { useCasinoStore } from '@/store';

export default function Home() {
  const { error, errorMessage } = useCasinoStore();
  
  useEffect(() => {
    void dataRequest.getData();
  }, []);


  return (
    <main className={s.main}>
      <Header />
      {error && <div className={s.error}>{errorMessage}</div>}
      <PopularCasinos />
    </main>
  );
}
