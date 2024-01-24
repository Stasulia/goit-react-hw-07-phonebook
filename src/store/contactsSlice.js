import { createSlice } from '@reduxjs/toolkit';
import {
  addContactThunk,
  deleteContactThunk,
  getContactsThunk,
} from './thunks';

const handlePending = state => {
  state.isLoading = true;
  state.error = '';
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload.message;
};

const handleFulfilled = state => {
  state.isLoading = false;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(getContactsThunk.fulfilled, (state, { payload }) => {
        state.items = payload;
      })
      .addCase(addContactThunk.fulfilled, (state, { payload }) => {
        state.items.push(payload);
      })
      .addCase(deleteContactThunk.fulfilled, (state, { payload }) => {
        state.items = state.items.filter(el => el.id !== payload.id);
      })
      .addMatcher(
        ({ action }) => action.type.endsWith('/pending'),
        handlePending
      )
      .addMatcher(
        ({ action }) => action.type.endsWith('/rejected'),
        handleRejected
      )
      .addMatcher(
        ({ action }) => action.type.endsWith('/fulfilled'),
        handleFulfilled
      );
  },
});

export const contactsReducer = contactsSlice.reducer;
