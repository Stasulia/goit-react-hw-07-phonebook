import { createSelector } from '@reduxjs/toolkit';

export const selectorItems = state => state.contacts.items;
export const selectorIsLoading = state => state.contacts.isLoading;
export const selectorError = state => state.contacts.error;
export const selectorFilter = state => state.contacts.filter;

export const selector = createSelector(
  selectorItems,
  selectorFilter,
  (items, filter) =>
    items.filter(({ el }) =>
      el.name.toLowerCase().includes(filter.toLowerCase())
    )
);
