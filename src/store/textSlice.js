import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const url =
  "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw";

export const getTexts = createAsyncThunk("/raw/getTexts", async () => {
  return axios.get(url).then((res) => res.data.quotes);
});

const textSlice = createSlice({
  name: "text",
  initialState: {
    list: [],
    status: null,
    textObj: {},
  },
  reducers: {
    newRandom(state, action) {
      state.textObj = state.list[Math.floor(Math.random() * state.list.length)];
    },
  },
  extraReducers: {
    [getTexts.pending]: (state, action) => {
      state.status = "loading";
    },
    [getTexts.fulfilled]: (state, action) => {
      state.list = action.payload;
      state.status = "success";
      state.textObj = state.list[Math.floor(Math.random() * state.list.length)];
    },
    [getTexts.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

export const textActions = textSlice.actions;
export default textSlice;
