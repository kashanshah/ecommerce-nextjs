import { ProductListing } from '../shop/product-listing';
import React, { useEffect } from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';

type BestSellerTabPanelProps = {
  categoryId: string;
  isActive: boolean;
};

export const BestSellerTabPanel = (props: BestSellerTabPanelProps) => {
  const { categoryId, isActive } = props;
  const limit = 8;

  const { isLoading, isFetching, refetch, data } = useQuery(
    ['best-seller-products', categoryId],
    async () => {
      const response = await axios.post('/api/products/list', { limit: 8, categoryId: categoryId });
      return response?.data;
    },
    {
      keepPreviousData: true,
      refetchOnMount: true,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      refetchInterval: false,
      enabled: false,
    }
  );

  useEffect(() => {
    if (!categoryId || !isActive) {
      return;
    }
    refetch({ queryKey: ['best-seller-products', categoryId] });
  }, [categoryId, isActive]);

  return (
    <div className={`tab-pane ${isActive && ' show active'}`} role='tabpanel'>
      <div className='row'>
        <ProductListing isLoading={isLoading || isFetching} products={data?.data} pageLimit={limit} />
      </div>
    </div>
  );
};
