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
