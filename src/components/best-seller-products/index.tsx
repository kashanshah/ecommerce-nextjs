import React, { useState } from 'react';
import Link from 'next/link';
import { products } from '../../utils/data';
import { BestSellerTabPanel } from './best-seller-tab-panel';

export const BestSellerProducts = () => {
  const [activeTab, setActiveTab] = useState('all');

  const allTabs = [
    {
      id: 'all',
      title: 'All',
      products: products,
    },
    {
      id: 'clothings',
      title: 'Clothings',
      products: products,
    },
    {
      id: 'bags',
      title: 'Bags',
      products: products,
    },
    {
      id: 'shoes',
      title: 'Shoes',
      products: products,
    },
    {
      id: 'accessories',
      title: 'Accessories',
      products: products,
    },
  ];

  return (
    <section className='product_section'>
      <div className='container'>
        <div className='product_header d-flex justify-content-between mb-45'>
          <div className='section_title'>
            <h2>best selling items</h2>
          </div>

          <div className='product_tab_btn d-flex'>
            <ul className='nav' id='myTab' role='tablist'>
              {allTabs.map((tab, index) => {
                return (
                  <li key={`${tab.id}-${index}`}>
                    <a
                      data-bs-toggle='tab'
                      onClick={() => setActiveTab(tab.id)}
                      role='tab'
                      aria-controls={tab.id}
                      aria-selected='false'
                      className={activeTab === tab.id && ' active'}
                    >
                      {tab.title}
                    </a>
                  </li>
                );
              })}
            </ul>
            <div className='all_product'>
              <Link href='/shop'>All Product</Link>
            </div>
          </div>
        </div>
        <div className='product_container'>
          <div className='tab-content'>
            {allTabs.map((tab, i) => (
              <BestSellerTabPanel key={`tab-pane-${i}`} categoryId={tab.id} isActive={activeTab === tab.id} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
