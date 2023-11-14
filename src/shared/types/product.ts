import { ButtonLink } from "./components";

interface Tag {
  name: string;
  color: string;
}

export interface Product {
  id: string;
  title: string;
  slug: string;
  description: string;
  price: number;
  discount?: number;
  category: any;
  currency: string;
  quantity: number;
  images: any;
  tags?: Tag[];
  rating: number;
  detailsButton: ButtonLink;
  options: any;
}
