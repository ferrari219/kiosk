import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { backURL } from 'config/config';

axios.defaults.baseURL = backURL;

export const ADD_ORDER = createAsyncThunk(
  'order',
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post('/order', data);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);
