import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './Slices/contactsSlice';
import { filterReducer } from './Slices/filterSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});
