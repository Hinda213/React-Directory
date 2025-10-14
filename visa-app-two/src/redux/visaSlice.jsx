import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  applicantName: "",
  country: "",
  status: "Not Applied",
};

const visaSlice = createSlice({
  name: "visa",
  initialState,
  reducers: {
    applyVisa: (state, action) => {
      state.applicantName = action.payload.name;
      state.country = action.payload.country;
      state.status = "Pending";
    },
    approveVisa: (state) => {
      state.status = "Approved";
    },
    rejectVisa: (state) => {
      state.status = "Rejected";
    },
  },
});

export const { applyVisa, approveVisa, rejectVisa } = visaSlice.actions;
export default visaSlice.reducer;
