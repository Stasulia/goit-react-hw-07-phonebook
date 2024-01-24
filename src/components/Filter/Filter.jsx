import React from 'react';
import css from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectorFilter } from 'store/selectors';
import { filterAction } from 'store/filterSlice';

const Filter = () => {
  const filter = useSelector(selectorFilter);
  const dispatch = useDispatch();

  const changeFilter = event => {
    dispatch(filterAction(event.target.value));
  };
  return (
    <form className={css.form}>
      <label className={css.label}>
        Find contacts by name
        <input type="text" value={filter} onChange={changeFilter} />
      </label>
    </form>
  );
};

export default Filter;
