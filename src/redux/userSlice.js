// userSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { currentCount } from './counterSlice';

// Async thunk for fetching users
export const fetchUsers = createAsyncThunk(
  'fetchUsers',
  async (_, { dispatch }) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    // console.log(response);
    const result = await response.json();
    console.log(result);
    if (result) dispatch(currentCount(result.length || 100));
    if (!response.ok) throw new Error('Failed to fetch users');
    return result;
  }
);

// Create a slice
const userSlice = createSlice({
  name: 'users',
  initialState: {
    loading: false,
    users: [],
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
});

export default userSlice.reducer;
