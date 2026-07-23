export interface Review {
  id: string;
  name: string;
  company?: string;
  rating: number; // 1 to 5
  message: string;
  date: string;
  avatar?: string;
}
