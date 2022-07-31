import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { updateConfig } from '../../redux/common-slice';
import { Image } from 'antd';
import Link from 'next/link';

export const MiniCart = () => {
  const { isMiniCartActive } = useSelector((state: RootState) => state.common);
  const dispatch = useDispatch();

  const closeShoppingCart = () => {
    dispatch(updateConfig({ isMiniCartActive: false }));
  };

  return (
    <>
      <div
        className={`xts-close-side xts-fill ${isMiniCartActive ? 'xts-opened' : ''}  `}
        onClick={closeShoppingCart}
      />
      <div
        className={`xts-cart-widget-side xts-side-hidden xts-scroll xts-side-right ${
          isMiniCartActive ? 'xts-opened' : ''
        }`}
      >
        <div className='xts-heading-with-btn'>
          <span className='title xts-fontsize-m'>Shopping cart</span>

          <div className='xts-close-button xts-action-btn xts-style-inline' onClick={closeShoppingCart}>
            <a href='#'>Close</a>
          </div>
        </div>

        <div className='widget woocommerce widget_shopping_cart'>
          <div className='widget_shopping_cart_content' style={{ opacity: 1 }}>
            <ul className='woocommerce-mini-cart xts-scroll-content cart_list product_list_widget '>
              <li className='woocommerce-mini-cart-item mini_cart_item' data-key='6cdd60ea0045eb7a6ec44c54d29ed402'>
                <a
                  href='https://hurf.pk/cart/?remove_item=6cdd60ea0045eb7a6ec44c54d29ed402&amp;_wpnonce=63e6d20991'
                  className='remove remove_from_cart_button'
                  aria-label='Remove this item'
                  data-product_id='184'
                  data-cart_item_key='6cdd60ea0045eb7a6ec44c54d29ed402'
                  data-product_sku='TE-21010'
                >
                  ×
                </a>
                <a href='https://hurf.pk/product/checkered-casual-polo/' className='xts-mini-cart-thumb'>
                  <Image
                    width='460'
                    height='549'
                    src='/wp-content/uploads/2019/11/tethys-prod-3.jpg'
                    className='attachment-woocommerce_thumbnail size-woocommerce_thumbnail'
                    alt=''
                    loading='lazy'
                    preview={false}
                  />
                </a>

                <div className='xts-mini-cart-content'>
                  <a href='https://hurf.pk/product/checkered-casual-polo/' className='xts-entities-title'>
                    Checkered casual polo
                  </a>

                  <div className='quantity'>
                    <button type='button' value='-' className='xts-minus' />
                    <label className='screen-reader-text' htmlFor='quantity_62e6ed37674dd'>
                      Checkered casual polo quantity
                    </label>
                    <input
                      type='number'
                      id='quantity_62e6ed37674dd'
                      className='input-text qty text'
                      step='1'
                      min='1'
                      max='27'
                      name='quantity'
                      defaultValue={1}
                      title='Qty'
                      size={4}
                      placeholder=''
                      inputMode='numeric'
                      autoComplete='off'
                    />
                    <button type='button' value='+' className='xts-plus'></button>
                  </div>

                  <span className='quantity'>
                    1 ×
                    <span className='woocommerce-Price-amount amount'>
                      <bdi>
                        <span className='woocommerce-Price-currencySymbol'>₨</span>&nbsp;119
                      </bdi>
                    </span>
                  </span>
                </div>
              </li>
            </ul>

            <div className='xts-mini-cart-footer'>
              <p className='woocommerce-mini-cart__total total'>
                <strong>Subtotal:</strong>
                <span className='woocommerce-Price-amount amount'>
                  <bdi>
                    <span className='woocommerce-Price-currencySymbol'>₨</span>&nbsp;119
                  </bdi>
                </span>
              </p>

              <p className='woocommerce-mini-cart__buttons buttons'>
                <Link href='/cart'>
                  <a className='xts-mini-cart-btn button wc-forward'>View cart</a>
                </Link>
                <Link href='/checkout'>
                  <a className='button checkout wc-forward'>Checkout</a>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
