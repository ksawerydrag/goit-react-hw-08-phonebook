import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilterQuery } from '../../redux/filter/slice';
import css from './Filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleFilterChange = e => {
    const value = e.target.value;
    dispatch(setFilterQuery(value));
  };

  return (
    <div className={css.filterWrapper}>
      <input
        className={css.filterInput}
        onChange={handleFilterChange}
        type="text"
        name="filter"
        placeholder="Find contacts by name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      />
    </div>
  );
};
