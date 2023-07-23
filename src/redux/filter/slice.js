import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = '';

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    setFilterQuery: {
      reducer(state, action) {
        return action.payload;
      },
      prepare(query) {
        return {
          payload: query,
        };
      },
    },
  },
});

export const { setFilterQuery } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
