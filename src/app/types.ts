export interface IProducts {
  products: Array<IProduct>;
}

export interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export interface ICart {
  product: IProduct;
  count: number;
}
