import React, { useState } from 'react';
import { BestSellerTabPanel } from './best-seller-tab-panel';
import { useQuery } from 'react-query';
import axios from 'axios';
import { BestSellerLoading } from './best-seller-loading';
import { BestSellerHeader } from './best-seller-header';

export const BestSellerProducts = () => {
  const [activeTab, setActiveTab] = useState('all');

  const { isLoading, data } = useQuery(
    'parent-categories',
    async () => {
      const response = await axios.post('/api/categories/list', { limit: 5, parentId: 0 });
      return response?.data;
    },
    {
      keepPreviousData: true,
      refetchOnMount: true,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      refetchInterval: false,
      onSuccess: (data) => {
        setActiveTab(data?.data?.[0]?.id);
      },
    }
  );

  if (isLoading) {
    return <BestSellerLoading />;
  }

  return (
    <section className='product_section'>
      <div className='container'>
        <div className='product_header d-flex justify-content-between mb-45'>
          <div className='section_title'>
            <h2>best selling items</h2>
          </div>

          <BestSellerHeader
            categories={data?.data}
            isLoading={isLoading}
            onChange={(id) => setActiveTab(id)}
            activeTabId={activeTab}
          />
        </div>
        <div className='product_container'>
          <div className='tab-content'>
            {data?.data?.map((category, i) => (
              <BestSellerTabPanel key={`tab-pane-${i}`} categoryId={category.id} isActive={activeTab === category.id} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
