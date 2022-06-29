export type IProduct = {
  id: string;
  title: string;
  image: string;
  images?: string[];
  slug: string;
  prices: {
    salePrice: string | number;
    price: string | number;
  };
  ratings: {
    rating: number;
    noOfRatings: number;
  };
  description?: string;
  isInStock?: boolean;
  sku?: string;
};
export const products: IProduct[] = [
  {
    id: '1',
    title: 'Product One',
    image: '/assets/img/product/product1.jpg',
    images: [
      'https://tm.hasthemes.com/edon-preview/edon/assets/img/product/big-product/product1.png',
      'https://tm.hasthemes.com/edon-preview/edon/assets/img/product/big-product/product2.png',
      'https://tm.hasthemes.com/edon-preview/edon/assets/img/product/big-product/product3.png',
      'https://tm.hasthemes.com/edon-preview/edon/assets/img/product/big-product/product4.png',
    ],
    slug: 'product-one',
    prices: {
      salePrice: '$20.00',
      price: '$26.00',
    },
    ratings: {
      rating: 4.8,
      noOfRatings: 3,
    },
    description:
      'asdA t-shirt that comes in three colors (red, white and blue) and three sizes (small, medium, large) is a configurable product.',
    isInStock: true,
    sku: 'ABC123456',
  },
  {
    id: '2',
    title: 'Product Two',
    slug: 'product-two',
    image: '/assets/img/product/product2.jpg',
    images: [
      'https://tm.hasthemes.com/edon-preview/edon/assets/img/product/big-product/product1.png',
      'https://tm.hasthemes.com/edon-preview/edon/assets/img/product/big-product/product2.png',
      'https://tm.hasthemes.com/edon-preview/edon/assets/img/product/big-product/product3.png',
      'https://tm.hasthemes.com/edon-preview/edon/assets/img/product/big-product/product4.png',
    ],
    prices: {
      salePrice: '$20.00',
      price: '$26.00',
    },
    ratings: {
      rating: 4.3,
      noOfRatings: 35,
    },
    description:
      'A t-shirt that comes in three colors (red, white and blue) and three sizes (small, medium, large) is a configurable product.',
    isInStock: true,
    sku: 'ABC123456',
  },
  {
    id: '3',
    title: 'Product Three',
    slug: 'product-three',
    image: '/assets/img/product/product3.jpg',
    prices: {
      salePrice: '$20.00',
      price: '$26.00',
    },
    ratings: {
      rating: 5,
      noOfRatings: 2,
    },
    description:
      'A t-shirt that comes in three colors (red, white and blue) and three sizes (small, medium, large) is a configurable product.',
    isInStock: true,
    sku: 'ABC123456',
  },
  {
    id: '4',
    title: 'Product Four',
    slug: 'product-four',
    image: '/assets/img/product/product4.jpg',
    prices: {
      salePrice: '$30.00',
      price: '$25.00',
    },
    ratings: {
      rating: 3.7,
      noOfRatings: 101,
    },
    description:
      'A t-shirt that comes in three colors (red, white and blue) and three sizes (small, medium, large) is a configurable product.',
    isInStock: true,
    sku: 'ABC123456',
  },
  {
    id: '1',
    title: 'Product One',
    slug: 'product-one',
    image: '/assets/img/product/product1.jpg',
    prices: {
      salePrice: '$20.00',
      price: '$26.00',
    },
    ratings: {
      rating: 4.8,
      noOfRatings: 3,
    },
    description:
      'A t-shirt that comes in three colors (red, white and blue) and three sizes (small, medium, large) is a configurable product.',
    isInStock: true,
    sku: 'ABC123456',
  },
  {
    id: '2',
    title: 'Product Two',
    slug: 'product-two',
    image: '/assets/img/product/product2.jpg',
    prices: {
      salePrice: '$20.00',
      price: '$26.00',
    },
    ratings: {
      rating: 4.3,
      noOfRatings: 35,
    },
    description:
      'A t-shirt that comes in three colors (red, white and blue) and three sizes (small, medium, large) is a configurable product.',
    isInStock: true,
    sku: 'ABC123456',
  },
  {
    id: '3',
    title: 'Product Three',
    slug: 'product-three',
    image: '/assets/img/product/product3.jpg',
    prices: {
      salePrice: '$20.00',
      price: '$26.00',
    },
    ratings: {
      rating: 5,
      noOfRatings: 2,
    },
    description:
      'A t-shirt that comes in three colors (red, white and blue) and three sizes (small, medium, large) is a configurable product.',
    isInStock: true,
    sku: 'ABC123456',
  },
  {
    id: '4',
    title: 'Product Four',
    slug: 'product-four',
    image: '/assets/img/product/product4.jpg',
    prices: {
      salePrice: '$30.00',
      price: '$25.00',
    },
    ratings: {
      rating: 3.7,
      noOfRatings: 101,
    },
    description:
      'A t-shirt that comes in three colors (red, white and blue) and three sizes (small, medium, large) is a configurable product.',
    isInStock: true,
    sku: 'ABC123456',
  },
];
