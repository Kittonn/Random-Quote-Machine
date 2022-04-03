import { configureStore } from "@reduxjs/toolkit";
import textSlice from "./textSlice";

const store = configureStore({ reducer: { text: textSlice.reducer } });

export default store;
