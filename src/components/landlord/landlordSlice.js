import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchLandlords = createAsyncThunk("fetchLandlords", async () => {
  const { data } = await axios.get("/api/landlords");
  return data;
});

const initialState = {
  allLandlords: [],
  singleLandlord: {},
};
const landlordSlice = createSlice({
  name: "landlordSlice",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchLandlords.fulfilled, (state, action) => {
      state.allLandlords = action.payload;
    });
  },
});

export default landlordSlice.reducer;
