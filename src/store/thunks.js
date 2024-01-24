import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  createContactApi,
  deleteContactApi,
  getContactsApi,
} from 'Service/ContactsApi';

export const getContactsThunk = createAsyncThunk(
  'contacts/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      return await getContactsApi();
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const addContactThunk = createAsyncThunk(
  'contacts/addContact',
  async (data, { rejectWithValue }) => {
    try {
      return await createContactApi(data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const deleteContactThunk = createAsyncThunk(
  'contacts/deleteContact',
  async (contact, { rejectWithValue }) => {
    try {
      return await deleteContactApi(contact);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
