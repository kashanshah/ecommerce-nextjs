import React from 'react';
import Link from 'next/link';
import { Skeleton } from '../skeleton';
import { ProductListing } from '../shop/product-listing';

export const BestSellerLoading = () => {
  return (
    <section className='product_section'>
      <div className='container'>
        <div className='product_header d-flex justify-content-between mb-45'>
          <div className='section_title'>
            <h2>best selling items</h2>
          </div>

          <div className='product_tab_btn d-flex'>
            <ul className='nav' id='myTab' role='tablist'>
              <li style={{ margin: '0 15px 0 0' }}>
                <Skeleton style={{ width: 50 }} />
              </li>
              <li style={{ margin: '0 15px 0 0' }}>
                <Skeleton style={{ width: 50 }} />
              </li>
              <li style={{ margin: '0 15px 0 0' }}>
                <Skeleton style={{ width: 50 }} />
              </li>
              <li style={{ margin: '0 15px 0 0' }}>
                <Skeleton style={{ width: 50 }} />
              </li>
            </ul>
            <div className='all_product' style={{ margin: 0 }}>
              <Link href='/shop'>
                <Skeleton style={{ width: 120 }} />
              </Link>
            </div>
          </div>
        </div>
        <div className='product_container'>
          <div className='tab-content'>
            <div className='row'>
              <ProductListing products={[]} isLoading={true} pageLimit={8} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
