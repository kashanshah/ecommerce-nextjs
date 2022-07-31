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
      <div className={className}>
        <button className='btn btn-primary' onClick={() => window?.open(product?.external_url, '_blank')}>
          {product?.button_text || 'Add To Cart'}
        </button>
      </div>
    );
  }

  if (product?.type === 'variable') {
    return (
      <div className={className}>
        <Link className='btn btn-primary' href={`/product/${product?.slug}-${product?.id}`}>
          <>Select Options</>
        </Link>
      </div>
    );
  }

  if (product?.type === 'grouped') {
    return (
      <div className={className}>
        <Link className='btn btn-primary' href={`/product/${product?.slug}-${product?.id}`}>
          <>View Products</>
        </Link>
      </div>
    );
  }

  return (
    <div className={className}>
      <button className='btn btn-primary' onClick={() => alert('Add to cart' + product?.name)}>
        {product?.button_text || 'Add To Cart'}
      </button>
    </div>
  );
};
