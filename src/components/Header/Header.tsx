import Image from 'next/image'
import React from 'react';
import s from './Header.module.scss';

export const Header = () => {
  return (
    <div className={s.block}>
      <Image
        src="/images/bigBanner.png"
        alt="Big Banner"
        className={s.image}
        width={1200}
        height={250}
      />
    </div>
  );
}
