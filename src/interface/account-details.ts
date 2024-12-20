export interface HostFormData {
  userType: string;
  hostBirthDay: string;
  hostPhoneNumber: string;
  hostCountry: string;
  hostProfilePicture: string | null;
  hostBusinessName: string;
  hostBusinessAddress: string;
  hostCompanyRegistrationNumber: string;
  hostTaxInformation: string;
  hostPreferredPayoutMethod: string;
  hostFrontIdCard: string | null;
  hostBackIdCard: string | null;
  hostGovernmentIdType: string;
  hostGovernmentIdNumber: string;
  hostHostingExperience: number | null;
  userRole: string;
  loading: boolean;
  success: boolean;
  error: boolean;
}

export interface GuestFormData {
  userType: string;
  guestBirthDay: string;
  guestCountry: string;
  guestProfilePicture: string;
  guestFrontIdCard: string;
  guestBackIdCard: string;
  guestGovernmentIdType: string;
  guestGovernmentIdNumber: string;
  userRole: string;
  success: boolean;
  loading: boolean;
  error: boolean;
}

export interface HostServerPayload {
  userType: string;
  hostBirthDay: string | null;
  hostPhoneNumber: string;
  hostCountry: string;
  hostProfilePicture: string;
  hostBusinessName: string;
  hostBusinessAddress: string;
  hostCompanyRegistrationNumber: string;
  hostTaxInformation: string;
  hostPreferredPayoutMethod: string;
  hostFrontIdCard: string;
  hostBackIdCard: string;
  hostGovernmentIdType: string;
  hostGovernmentIdNumber: string;
  hostHostingExperience: number | null | string;
  userRole: string;
}

export interface GuestServerPayload {
  userType: string;
  guestPhoneNumber: string;
  guestBirthDay: string;
  guestCountry: string;
  guestProfilePicture: string | null;
  guestFrontIdCard: string | null;
  guestBackIdCard: string | null;
  guestGovernmentIdType: string;
  guestGovernmentIdNumber: string;
  userRole: string;
}

export interface BooleanInterface {}
