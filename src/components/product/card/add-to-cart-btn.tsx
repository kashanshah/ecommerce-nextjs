import React from 'react';
import { IProduct } from '../../../utils/data';

export const AddToCartBtn = (props: { product: IProduct; className?: string }) => {
  const { product, className } = props;

  const onAddToCart = (product: IProduct) => {
    if (product?.external_url) {
      window?.open(product?.external_url, '_blank');
      return;
    }
  };

  if (!product) {
    return null;
  }

  return (
    <div className={className}>
      <button className='btn btn-primary' onClick={() => onAddToCart(product)}>
        {product?.button_text || 'Add To Cart'}
      </button>
    </div>
  );
};
