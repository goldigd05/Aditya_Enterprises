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


// 2D Corner Aluminium Coving
// 3D Corner Aluminium Coving
// Automatic Door Drop Seal
// Automatic Door Drop Seal Catelog
// Stainless Steel Dead Door Lock Set
// Door Frame Cap
// Door Seals
// Door Panic Bar
// Pass Box & Door Interlocking System
// Stainless Steel 304 Gr DOP Port M8 Thread
// Stainless Steel Door Stopper

// Biometric Electric Magnet
// Stainless Steel 304 Gr Hepa Filter Clamp
// Aluminium D Handle, 250 mm(10 in), Black
//   Hinge Plate
//   Hydraulic Door Closer Set
//   SS 304 PASS BOX HANDLE
//   Rubber Door Seal
//   Stainless Steel 304 Gr Flag Hinges
//  Ball Bearing Hinge, Stainless Steel(SS), 4 Inch, 3 mm, SS Finish
//  
//   Stainless Steel Mortise Lock
//   Stainless Steel Flush Bolt Set
//   Aluminium Flush Tower Bolt
//   SS Butt Hinges-delete kr diya la lena
// Plastic Door Handles
// Plastic Door Handles2
// Plastic Door Hinges
// Black Plastic Door Hinges