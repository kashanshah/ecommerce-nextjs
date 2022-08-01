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
    <div className='xts-prod-design-simple single_product'>
      <div className='xts-col'>
        <div className='xts-product product type-product post-195 status-publish instock product_cat-clothing product_cat-jackets-clothing product_cat-man product_tag-black product_tag-casual product_tag-jacket has-post-thumbnail shipping-taxable purchasable product-type-variable'>
          <div className='xts-product-thumb'>
            <Link href={`/product/${product.slug}-${product.id}`} className='xts-product-link xts-fill' />
            {product.on_sale && (
              <div className='xts-product-labels xts-shape-rectangle'>
                <span className='xts-onsale xts-product-label'>SALE</span>
              </div>
            )}
            {product.featured && (
              <div className='xts-product-labels xts-shape-rectangle'>
                <span className='xts-featured xts-product-label'>NEW</span>
              </div>
            )}
            <div className='xts-product-image'>
              <Image
                width='460'
                height='549'
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
                className='attachment-shop_catalog size-shop_catalog'
                loading='lazy'
              />
            </div>
            <div className='xts-product-actions'>
              <div className='xts-wishlist-btn xts-action-btn xts-style-icon'>
                <a href='/wishlist/'>Add to wishlist </a>
              </div>
              <div className='xts-compare-btn xts-action-btn xts-style-icon'>
                <a href='/compare/' rel='nofollow' data-added-text='Compare products' data-id='195'>
                  Compare
                </a>
              </div>
              {/*<div className='xts-quick-view-btn xts-action-btn xts-style-icon'>*/}
              {/*  <a href='/product/full-zip-man-jacket/' rel='nofollow' data-id='195'>*/}
              {/*    Quick view*/}
              {/*  </a>*/}
              {/*</div>*/}
            </div>
          </div>
          <div className='xts-product-content'>
            <div className='xts-product-content-head'>
              <h2 className='woocommerce-loop-product__title xts-entities-title'>
                <Link href={`/product/${product.slug}-${product.id}`}>
                  <a>{product.name}</a>
                </Link>
              </h2>
              <div className='price_box'>
                <ProductPrice priceHtml={product.price_html} />
              </div>
            </div>
            <div className='xts-product-add-btn'>
              <AddToCartBtn
                product={product}
                className='button product_type_variable add_to_cart_button xts-add-to-cart'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
