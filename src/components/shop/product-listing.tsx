import React from 'react';
import { ProductCard } from '../product/card/card';
import { SkeletonProductCard } from '../skeleton/skeleton-product-card';
import { IProduct } from '../../utils/data';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

type ProductListingProps = {
  products: IProduct[];
  pageLimit?: number;
  isLoading?: boolean;
};

export const ProductListing = (props: ProductListingProps) => {
  const { isGridListing } = useSelector((state: RootState) => state.common);
  const { isLoading, products, pageLimit = 20 } = props;

  if (isLoading) {
    return (
      <>
        {[...Array.from({ length: pageLimit }, (_, i) => i)]?.map((index) => {
          return (
            <div
              key={index}
              className={isGridListing ? 'col-lg-3 col-md-3 col-sm-6' : 'col-12 d-flex'}
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
          <div key={`shop-product-${index}`} className={isGridListing ? 'col-lg-3 col-md-3 col-sm-6' : 'col-12'}>
            <ProductCard product={product} />
          </div>
        );
      })}
    </>
  );
};
