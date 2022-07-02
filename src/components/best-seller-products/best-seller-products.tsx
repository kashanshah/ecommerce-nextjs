import React, { useState } from 'react';
import { BestSellerTabPanel } from './best-seller-tab-panel';
import { useQuery } from 'react-query';
import axios, { AxiosError } from 'axios';
import { BestSellerLoading } from './best-seller-loading';
import { BestSellerHeader } from './best-seller-header';

type BestSellerProductsProps = {
  title?: string;
};

export const BestSellerProducts = (props: BestSellerProductsProps) => {
  const { title = 'best selling items' } = props;

  const [activeTab, setActiveTab] = useState('all');

  const { isLoading, isError, error, data } = useQuery<any, AxiosError>(
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

  if (isLoading) {
    return <BestSellerLoading />;
  }

  if (isError) {
    return (
      <section className='product_section'>
        <div className='container'>
          <div className='product_header d-flex justify-content-center mb-45'>
            <div className='section_title text-center'>
              <h2>Oops! Something went wrong.</h2>
              <p>{error?.message}</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className='product_section'>
      <div className='container'>
        <div className='product_header d-flex justify-content-between mb-45'>
          <div className='section_title'>
            <h2>{title}</h2>
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
