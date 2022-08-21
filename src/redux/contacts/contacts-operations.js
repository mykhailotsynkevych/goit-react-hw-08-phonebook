import { createAsyncThunk } from "@reduxjs/toolkit";
import { getContactsApi, addContactApi, deleteContactApi } from "../../api/mockapi";

export const getContacts = createAsyncThunk(
  'getContacts',
  async (_, thunkApi) => {
    try {
      const contacts = await getContactsApi();
      return contacts;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addContacts = createAsyncThunk(
  'addContacts',
  async (contact, rejectWithValue) => {
    try {
      const newContact = await addContactApi(contact);

      return newContact;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const removeContacts = createAsyncThunk(
  'deleteContacts',
  async (id, { rejectWithValue }) => {
    try {
      await deleteContactApi (id);
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);