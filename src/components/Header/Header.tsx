import Image from 'next/image'
import React from 'react';
import s from './Header.module.scss';

export const Header = () => {
  return (
    <div className={s.container}>
      <span className={s.title}>GGCasino</span>
    </div>
  );
}
