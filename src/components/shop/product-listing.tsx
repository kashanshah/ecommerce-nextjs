import React, { useState } from 'react';
import { ProductCard } from '../product/card';
import { SkeletonProductCard } from '../skeleton/skeleton-product-card';

type ProductListingProps = {
  products: any[];
  pageLimit?: number;
  isLoading?: boolean;
};

export const ProductListing = (props: ProductListingProps) => {
  const [isGrid] = useState(true);

  const { isLoading, products, pageLimit = 20 } = props;

  if (isLoading) {
    return (
      <>
        {[...Array.from({ length: pageLimit }, (_, i) => i)]?.map((index) => {
          return (
            <div
              key={index}
              className={isGrid ? 'col-lg-3 col-md-3 col-sm-6' : 'col-12 d-flex'}
              style={{ textAlign: 'center' }}
            >
              <SkeletonProductCard key={index} />
            </div>
          );
        })}
      </>
    );
  }

  if (!products?.length) {
    return <>no products</>;
  }

  return (
    <>
      {products?.map((product, index) => {
        return (
          <div key={`shop-product-${index}`} className={isGrid ? 'col-lg-3 col-md-3 col-sm-6' : 'col-12'}>
            <ProductCard product={product} />
          </div>
        );
      })}
    </>
  );
};
