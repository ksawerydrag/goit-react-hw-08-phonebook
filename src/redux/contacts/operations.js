import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async (_, thunkAPI) => {
  try {
      const response = await axios.get('/contacts');
      return response.data;
  } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
  }
});

export const addContact = createAsyncThunk('contacts/add', async ({ name, number }, thunkAPI) => {
  try {
      const response = await axios.post('/contacts', { name, number });
      console.log(response.data);
      return response.data
  } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
  }
});

export const deleteContact = createAsyncThunk('contacts/delete', async (contactId, thunkAPI) => {
  try {
      await axios.delete(`/contacts/${contactId}`);
      return contactId;
  } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
  }
});