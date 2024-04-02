import { createAsyncThunk } from "@reduxjs/toolkit";
import { getContactsApi, addContactApi, deleteContactApi } from "../../api/connectionsAPI";

export const getContacts = createAsyncThunk(
  "contacts/fetchAll",
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
  "contacts/addContact",
  async (contact, { rejectWithValue}) => {
    try {
      const newContact = await addContactApi(contact);
      return newContact;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const removeContacts = createAsyncThunk(
  "contacts/deleteContact",
  async (id, { rejectWithValue}) => {

    try {
      await deleteContactApi(id);
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

