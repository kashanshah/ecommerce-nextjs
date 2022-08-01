import React, { useState } from 'react';
import { BestSellerTabPanel } from './best-seller-tab-panel';
import { useQuery } from 'react-query';
import axios, { AxiosError } from 'axios';
import { BestSellerHeader } from './best-seller-header';

type BestSellerProductsProps = {
  preTitle?: string;
  title?: string;
};

export const BestSellerProducts = (props: BestSellerProductsProps) => {
  const { preTitle = 'Choose top trending items', title = 'Our Products' } = props;

  const [activeTab, setActiveTab] = useState('all');

  const { isLoading, data } = useQuery<any, AxiosError>(
    'parent-categories',
    async () => {
      const response = await axios.post('/api/categories/list', {
        per_page: 8,
        parent: 0,
        sortby: 'count',
        hide_empty: true,
      });
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

  return (
    <section className='product_section'>
      <div className='xts-products-tabs'>
        <div className={`xts-tabs-header xts-design-by-sides ${isLoading ? 'xts-loading' : ''}`}>
          <div className='xts-tabs-title-wrapper'>
            <div className='xts-tabs-subtitle'>{preTitle}</div>
            <h3 className='xts-tabs-title xts-fontsize-xl'>
              <span>{title}</span>
            </h3>
          </div>
          <BestSellerHeader
            categories={data?.data}
            isLoading={isLoading}
            onChange={(id) => setActiveTab(id)}
            activeTabId={activeTab}
          />
        </div>

        <div className={`xts-products-tab-content ${isLoading ? 'xts-loading' : ''}`}>
          {data?.data?.map?.((category, i) => (
            <BestSellerTabPanel key={`tab-pane-${i}`} categoryId={category.id} isActive={activeTab === category.id} />
          ))}
        </div>
      </div>
    </section>
  );
};
