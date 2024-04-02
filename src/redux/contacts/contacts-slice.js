import { createSlice } from '@reduxjs/toolkit';
import { getContacts, addContacts, removeContacts } from './contacts-operations';

import {changeFilter} from './contacts-actions';
import operation from '../auth/auth-operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    filter: '',
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
    //getContacts
      .addCase(getContacts.pending, handlePending)
      .addCase(getContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(getContacts.rejected, handleRejected)
      //addContacts 
      .addCase(addContacts.pending, handlePending)
      .addCase(addContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(addContacts.rejected, handleRejected)
      //removeContacts
      .addCase(removeContacts.pending, handlePending)
      .addCase(removeContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = state.items.filter(({ id }) => id !== action.payload);
      })
      // state.filter(({ id }) => id !== payload),
      .addCase(removeContacts.rejected, handleRejected)
      //clear after logOut
      .addCase(operation.logOut.fulfilled, state => {
        state.items = [];
        state.error = null;
        state.isLoading = false;
      })
      //filter
      .addCase(changeFilter, (state, action) => {
        state.filter = action.payload;
      })
  },
});

export  const contactsReducer = contactsSlice.reducer;