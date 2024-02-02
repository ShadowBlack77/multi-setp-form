export interface Data {
  name: string;
  email: string;
  phone: string;
  period: string;
  service: string | undefined;
  servicePrice: number | undefined;
  additionalServices: string;
  aditionalServicesPrice: number;
  finalPrice: number;
}