import React from 'react';
import { IProduct } from '../../../utils/data';
import { Link } from '../../link';

export const AddToCartBtn = (props: { product: IProduct; className?: string }) => {
  const { product, className } = props;

  if (!product) {
    return null;
  }

  if (product?.type === 'external') {
    return (
      <button className={className} onClick={() => window?.open(product?.external_url, '_blank')}>
        {product?.button_text || 'Add To Cart'}
      </button>
    );
  }

  if (product?.type === 'variable') {
    return (
      <Link className={className} href={`/product/${product?.slug}-${product?.id}`}>
        <>Select Options</>
      </Link>
    );
  }

  if (product?.type === 'grouped') {
    return (
      <Link className={className} href={`/product/${product?.slug}-${product?.id}`}>
        <>View Products</>
      </Link>
    );
  }

  return (
    <button className={className} onClick={() => alert('Add to cart' + product?.name)}>
      {product?.button_text || 'Add To Cart'}
    </button>
  );
};
