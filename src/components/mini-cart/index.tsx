import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { updateConfig } from '../../redux/common-slice';

export const MiniCart = () => {
  const { isMiniCartActive } = useSelector((state: RootState) => state.common);
  const dispatch = useDispatch();

  return (
    <div className={`mini_cart ${isMiniCartActive ? 'active' : ''}`}>
      <div className='cart_gallery'>
        <div className='cart_close'>
          <div className='cart_text'>
            <h3>cart</h3>
          </div>
          <div className='mini_cart_close'>
            <a
              href='#'
              onClick={() => {
                dispatch(updateConfig({ isMiniCartActive: false }));
              }}
            >
              <i className='icon-close icons' />
            </a>
          </div>
        </div>
        <div className='cart_item'>
          <div className='cart_img'>
            <a href='#'>
              <img src='/assets/img/product/product1.jpg' alt='' />
            </a>
          </div>
          <div className='cart_info'>
            <a href='#'>Primis In Faucibus</a>
            <p>
              1 x <span> $65.00 </span>
            </p>
          </div>
          <div className='cart_remove'>
            <a href='#'>
              <i className='icon-close icons' />
            </a>
          </div>
        </div>
        <div className='cart_item'>
          <div className='cart_img'>
            <a href='#'>
              <img src='/assets/img/product/product2.jpg' alt='' />
            </a>
          </div>
          <div className='cart_info'>
            <a href='#'>Letraset Sheets</a>
            <p>
              1 x <span> $60.00 </span>
            </p>
          </div>
          <div className='cart_remove'>
            <a href='#'>
              <i className='icon-close icons' />
            </a>
          </div>
        </div>
      </div>
      <div className='mini_cart_table'>
        <div className='cart_table_border'>
          <div className='cart_total'>
            <span>Sub total:</span>
            <span className='price'>$125.00</span>
          </div>
          <div className='cart_total mt-10'>
            <span>total:</span>
            <span className='price'>$125.00</span>
          </div>
        </div>
      </div>
      <div className='mini_cart_footer'>
        <div className='cart_button'>
          <a href='cart.html'>
            <i className='fa fa-shopping-cart' /> View cart
          </a>
        </div>
        <div className='cart_button'>
          <a href='checkout.html'>
            <i className='fa fa-sign-in' /> Checkout
          </a>
        </div>
      </div>
    </div>
  );
};
