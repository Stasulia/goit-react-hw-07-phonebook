const { createSlice } = require('@reduxjs/toolkit');
const {
  getContactsThunk,
  addContactThunk,
  deleteContactThunk,
} = require('./thunks');

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
    contacts: [],
    isLoading: false,
    error: '',
  },
  extraReducers: builder => {
    builder
      .addCase(getContactsThunk.fulfilled, (state, { payload }) => {
        state.contacts = payload.contacts;
      })
      .addCase(addContactThunk.fulfilled, (state, { payload }) => {
        state.contacts.push(payload);
      })
      .addCase(deleteContactThunk.fulfilled, (state, { payload }) => {
        state.contacts = state.contacts.filter(el => el.id !== payload.id);
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
