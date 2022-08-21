import { createSelector } from '@reduxjs/toolkit';

export const getContact = state => state.contacts.items;
export const getFilter = state => state.contacts.filter;

export const getVisibleContacts = createSelector(
  [getContact, getFilter],
  (items, filter) => {
    const filteredItems = items.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );

    return filteredItems;
  }
);
