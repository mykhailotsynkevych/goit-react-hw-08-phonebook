import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items;
export const selectFilter = state => state.contacts.filter;
export const selectIsContacts = (state) => Boolean(state.contacts.items.length);

export const getVisibleContacts = createSelector(
  [selectContacts, selectFilter],
  (items, filter) => {
    const filteredItems = items.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );

    return filteredItems;
  }
);
