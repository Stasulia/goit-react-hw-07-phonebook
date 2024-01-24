import { configureStore } from '@reduxjs/toolkit';

const { contactsReducer } = require('./contactsSlice');
const { filterReducer } = require('./filterSlice');

const reducer = {
  contacts: contactsReducer,
  filter: filterReducer,
};

export const store = configureStore({ reducer });
