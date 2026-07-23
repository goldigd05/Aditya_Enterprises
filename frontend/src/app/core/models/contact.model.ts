export interface ContactRequest {
  name: string;
  phone: string;
  email: string;
  company?: string;
  productInterested?: string;
  message: string;
}

export interface ContactResponse {
  success: boolean;
  message: string;
}
