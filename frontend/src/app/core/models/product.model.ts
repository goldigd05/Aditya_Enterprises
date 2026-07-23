export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  shortDescription: string;
  description: string;
  image: string;
  images?: string[];
  specifications: { label: string; value: string }[];
  features: string[];
  badge?: string;
}

export type ProductCategory =
  | 'Door Handles'
  | 'Door Hinges'
  | 'Door Drop Seal'
  | 'Door Seal'
  | 'Electric Magnet Lock'
  | 'Door Closer'
  | 'Glass Fittings'
  | 'Mortise Locks'
  | 'Cabinet Handles'
  | 'Accessories';
