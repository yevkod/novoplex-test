'use client';

import s from './page.module.scss';
import { Header } from '@/components/Header/Header';
import { PopularCasinos } from '@/components/PopularCasinos/PopularCasinos';
import { useEffect } from 'react';
import { dataRequest } from '@/services/Data';

export default function Home() {

  useEffect(() => {
    void dataRequest.getData();
  }, []);


  return (
    <main className={s.main}>
      <Header />
      <PopularCasinos />
    </main>
  );
}
