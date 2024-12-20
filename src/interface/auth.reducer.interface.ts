//interface definition for the auth reducer

export interface RegisterAuthReducerTypes {
  userFirstName: string;
  userLastName: string;
  userMiddleName: string;
  userEmail: string;
  userPassword: string;
  loading: boolean;
  error: boolean;
  success: boolean;
}

export interface LoginAuthReducerTypes {
  userEmail: string;
  userPassword: string;
  loading: boolean;
  error: boolean;
  success: boolean;
}

export interface RegisterBodyTypes {
  userFirstName: string;
  userLastName: string;
  userMiddleName: string;
  userEmail: string;
  userPassword: string;
}

export interface LoginBodyTypes {
  userEmail: string;
  userPassword: string;
}
