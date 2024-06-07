import React, { ChangeEvent, useState } from 'react';
import s from './Input.module.scss';
import { InputProps } from '@/types';

export const Input: React.FC<InputProps> = ({
  onSearch,
}) => {
  const [search, setSearch] = useState<string>('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearch(value);
    onSearch(value);
  };
  return (
    <div className={s.container}>
      <input
        type="text"
        value={search}
        onChange={handleChange}
        placeholder="Search for casinos..."
        className={s.input}
      />
    </div>
  );
};
