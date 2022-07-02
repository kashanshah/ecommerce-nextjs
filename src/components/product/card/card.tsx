import { RatingStars } from '../rating-stars';
import React from 'react';
import { Image } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { AddToCartBtn } from './add-to-cart-btn';
import { IProduct } from '../../../utils/data';
import { Link } from '../../link';

export const ProductPrice = (props: { priceHtml?: string }) => {
  const { priceHtml } = props;

  return <p dangerouslySetInnerHTML={{ __html: priceHtml }} />;
};

export const ProductCard = (props: { product: IProduct }) => {
  const { product } = props;

  if (!product) {
    return null;
  }

  return (
    <div className='single_product'>
      <div className='product_thumb'>
        <Link href={`/product/${product.slug}-${product.id}`}>
          <Image
            width='100%'
            height={300}
            style={{ objectFit: 'cover' }}
            src={product.images?.[0]?.src}
            preview={false}
            alt={product.images?.[0]?.alt}
            placeholder={
              <div style={{ minHeight: 300, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <LoadingOutlined style={{ fontSize: 24 }} spin />
              </div>
            }
            fallback={'/assets/img/fallback.png'}
            // loading='https://tm.hasthemes.com/edon-preview/edon/assets/img/product/big-product/product1.png'
          />
        </Link>
        <div className='product_action'>
          <ul>
            <li className='wishlist'>
              <a
                href='wishlist.html'
                data-tippy='Wishlist'
                data-tippy-inertia='true'
                data-tippy-delay='50'
                data-tippy-arrow='true'
                data-tippy-placement='left'
              >
                <i className='icon-heart icons' />
              </a>
            </li>

            <li className='quick_view'>
              <a
                data-bs-toggle='modal'
                data-bs-target='#modal_box'
                data-tippy='Quick View'
                href='#'
                data-tippy-inertia='true'
                data-tippy-delay='50'
                data-tippy-arrow='true'
                data-tippy-placement='left'
              >
                <i className='icon-size-fullscreen icons' />
              </a>
            </li>
            <li className='compare'>
              <a
                data-tippy='Compare'
                href='compare.html'
                data-tippy-inertia='true'
                data-tippy-delay='50'
                data-tippy-arrow='true'
                data-tippy-placement='left'
              >
                <i className='icon-refresh icons' />
              </a>
            </li>
          </ul>
        </div>
        {product.on_sale && (
          <div className='product_label'>
            <span>SALE</span>
          </div>
        )}
      </div>
      <div className='product_content grid_content text-center'>
        <RatingStars rating={Number(product.average_rating)} noOfRatings={product.rating_count} />
        <h4 className='product_name'>
          <a href={`/product/${product.slug}-${product.id}`}>{product.name}</a>
        </h4>
        <div className='price_box'>
          <ProductPrice priceHtml={product.price_html} />
        </div>
        <AddToCartBtn product={product} className='add_to_cart' />
      </div>
      <div className='product_list_content'>
        <h4 className='product_name'>
          <Link href={`/product/${product.slug}-${product.id}`}>
            <>{product.name}</>
          </Link>
        </h4>
        <p>
          <a href='#'>shows</a>
        </p>
        <ProductPrice priceHtml={product.price_html} />
        <div className='product_desc'>
          <p>{product.short_description}</p>
        </div>
        <div className='add_to_cart'>
          <AddToCartBtn product={product} className='add_to_cart' />
        </div>
      </div>
    </div>
  );
};
