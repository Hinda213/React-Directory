export interface PersonalInfo {
  firstName: string;
  lastName: string;
  dob: string;
  passportNumber: string;
  nationality: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
}

export interface ApplicationState {
  step: number;
  visaType: string;
  personal: PersonalInfo;
  contact: ContactInfo;
}
