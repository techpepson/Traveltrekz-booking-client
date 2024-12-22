//interface definition for properties

export interface PropertyPayloadTypes {
  propertyType: string;
  propertyLocation: string;
  propertyDescription: string;
  propertyImages: string[] | null;
  propertyAmenities: string[];
  roomType: string;
  propertyTitle: string;
  pricingType: string;
  unitPrice: number;
  currency: string;
}

export interface PropertyProps {
  propertyType: string;
  propertyLocation: string;
  propertyDescription: string;
  propertyImages: string[] | null;
  propertyAmenities: string[];
  roomType: string;
  propertyTitle: string;
  pricingType: string;
  unitPrice: number;
  currency: string;
  loading: boolean;
  error: boolean;
  success: boolean;
}

export interface PendingPropertiesTypes {
  propertyDescription: string;
  propertyLocation: string;
  propertyImages: string[];
  propertyAmenities: string[];
  roomType: string;
  pricingType: string;
  unitPrice: number;
  currency: string;
  availability: string;
  propertyReviews?: string[];
  policies: string;
  propertyOwner: string;
  ownerEmail: string;
  propertyId: string;
  propertyTitle: string;
  propertyLikes?: string;
  propertyStatus: string;
}

export interface PendingPropPayload {
  pendingProperties: PendingPropertiesTypes[];
  approvedProperties: PendingPropertiesTypes[];
  loading: boolean;
  success: boolean;
  error: boolean;
}
