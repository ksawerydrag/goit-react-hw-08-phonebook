import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilterQuery } from '../redux/Slices/filterSlice';
import css from './Filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleFilterChange = e => {
    const value = e.target.value;
    dispatch(setFilterQuery(value));
  };

  return (
    <div>
      <input
        className={css.findInput}
        onChange={handleFilterChange}
        type="text"
        name="filter"
        placeholder="Find contacts by name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      />
    </div>
  );
};
