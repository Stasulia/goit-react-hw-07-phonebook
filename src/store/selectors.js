import { createSelector } from '@reduxjs/toolkit';

export const selectorItems = state => state.contacts.contacts.items;
export const selectorIsLoading = state => state.contacts.contacts.isLoading;
export const selectorError = state => state.contacts.contacts.error;
export const selectorFilter = state => state.filter.filter;

export const selector = createSelector(
  selectorItems,
  selectorFilter,
  (items, filter) =>
    items.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    )
);
