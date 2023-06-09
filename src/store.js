import { configureStore } from "@reduxjs/toolkit";
import landlordReducer from "./components/landlord/landlordSlice";

const store = configureStore({
  reducer: {
    landlords: landlordReducer,
  },
});

export default store;
