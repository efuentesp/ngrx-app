export interface Customer {
  id: string;
  name: string;
  description: string;
  email: string;
  created_date: Date;
  orders_count: number;
  max_quantity: number;
  max_amount: number;
  type: string;
  country: string;
  enabled: boolean;
  product_types: string[];
}
