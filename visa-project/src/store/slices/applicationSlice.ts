import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { ApplicationState, PersonalInfo, ContactInfo } from "../../types";

const initialState: ApplicationState = {
  step: 1,
  visaType: "",
  personal: {
    firstName: "",
    lastName: "",
    dob: "",
    passportNumber: "",
    nationality: "",
  },
  contact: { email: "", phone: "" },
};

const applicationSlice = createSlice({
  name: "application",
  initialState,
  reducers: {
    setVisaType: (state, action: PayloadAction<string>) => {
      state.visaType = action.payload;
    },
    updatePersonal: (state, action: PayloadAction<Partial<PersonalInfo>>) => {
      state.personal = { ...state.personal, ...action.payload };
    },
    updateContact: (state, action: PayloadAction<Partial<ContactInfo>>) => {
      state.contact = { ...state.contact, ...action.payload };
    },
    setStep: (state, action: PayloadAction<number>) => {
      state.step = action.payload;
    },
    resetApplication: () => initialState,
  },
});

export const {
  setVisaType,
  updatePersonal,
  updateContact,
  setStep,
  resetApplication,
} = applicationSlice.actions;
export default applicationSlice.reducer;
