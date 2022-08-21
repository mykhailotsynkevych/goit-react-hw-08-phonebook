import { createReducer, combineReducers } from '@reduxjs/toolkit';
import { getContacts, addContacts, removeContacts } from './contacts-operations';
import {changeFilter} from './contacts-actions';

const items = createReducer([], {
  [getContacts.fulfilled]: (_, { payload }) => payload,
  [addContacts.fulfilled]: (state, { payload }) => [...state, payload],

  [removeContacts.fulfilled]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const loading = createReducer(false, {
  [getContacts.pending]: () => true,
  [getContacts.fulfilled]: () => false,
  [getContacts.rejected]: () => false,

  [addContacts.pending]: () => true,
  [addContacts.fulfilled]: () => false,
  [addContacts.rejected]: () => false,

  [removeContacts.pending]: () => true,
  [removeContacts.fulfilled]: () => false,
  [removeContacts.rejected]: () => false,
});

const filter = createReducer("", {
  [changeFilter]: (_, { payload }) => payload,
});

const setError = (_, { payload }) => payload;

const error = createReducer(null, {
  [getContacts.rejected]: setError,
  [getContacts.pending]: () => null,

  [addContacts.rejected]: setError,
  [addContacts.pending]: () => null,

  [removeContacts.rejected]: setError,
  [removeContacts.pending]: () => null,
});

export default combineReducers({
  items,
  filter,
  loading,
  error,
});