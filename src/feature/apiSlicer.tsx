import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUser = createAsyncThunk("fetchUser", async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/users");
  return data.json();
});

const usersSlice = createSlice({
  name: "users",
  initialState: {
    isLoading: false,
    data: null,
    error: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchUser.rejected, (state) => {
      state.error = true;
    });
  },
});

export default usersSlice.reducer;
