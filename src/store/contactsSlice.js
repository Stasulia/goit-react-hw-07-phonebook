import {
  addContactThunk,
  deleteContactThunk,
  getContactsThunk,
} from './thunks';

const { createSlice } = require('@reduxjs/toolkit');

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
    error: '',
  },
  extraReducers: builder => {
    builder
      .addCase(getContactsThunk.fulfilled, (state, { payload }) => {
        state.contacts.items = payload;
      })
      .addCase(addContactThunk.fulfilled, (state, { payload }) => {
        state.contacts.items.push(payload);
      })
      .addCase(deleteContactThunk.fulfilled, (state, { payload }) => {
        state.contacts.items = state.contacts.items.filter(
          el => el.id !== payload.id
        );
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
