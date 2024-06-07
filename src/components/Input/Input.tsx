import React, { ChangeEvent } from 'react';
import s from './Input.module.scss';
import { InputProps } from '@/types';

export const Input = <T extends string>({ value, onChange }: InputProps<T>) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value as T;
    onChange(newValue);
  };

  return (
    <div className={s.container}>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="Search for casinos..."
        className={s.input}
      />
    </div>
  );
};
