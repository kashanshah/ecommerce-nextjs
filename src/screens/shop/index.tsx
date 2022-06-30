import React, { useEffect, useState } from 'react';
import { Breadcrumb } from '../../components/breadcrumb';
import { MainBanner } from '../../components/main-banner/main-banner';
import { ShopFilters } from '../../components/shop/shop-filters';
import { ProductListing } from '../../components/shop/product-listing';
import { useQuery } from 'react-query';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useGoToUrl } from '../../utils/url';
import { Pagination } from '../../components/pagination';

export const ShopScreen = () => {
  const {
    query,
    query: { page = 1 },
  } = useRouter();
  const goToUrl = useGoToUrl();

  const [isGrid, setIsGrid] = useState(true);

  const limit = 20;
  const offset = limit * (Number(page as string) - 1);

  const { isLoading, data, isFetching, refetch } = useQuery(
    ['shop-products', Number(page as string)],
    async () => {
      const response = await axios.post('/api/products/list', { limit, offset });
      return response?.data;
    },
    {
      keepPreviousData: true,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      refetchInterval: false,
    }
  );

  useEffect(() => {
    refetch({ queryKey: ['shop-products', Number(page as string)] });
  }, [query]);

  return (
    <div className='shop_section shop_reverse pt-sm-5'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-12'>
            <Breadcrumb
              routes={[
                {
                  path: '/home',
                  breadcrumbName: 'Home',
                },
                {
                  path: 'shop',
                  breadcrumbName: 'Shop',
                },
              ]}
            />

            <MainBanner />

            <ShopFilters totalProducts={data?.total} />

            <div className={`row shop_wrapper ${isGrid ? 'grid_3' : 'grid_list'}`}>
              <div className='row'>
                <ProductListing isLoading={isLoading || isFetching} products={data?.data} pageLimit={limit} />
              </div>
            </div>

            <div className='pagination_style pagination justify-content-center'>
              <Pagination
                pageCount={data?.total / limit}
                forcePage={Number(page as string) - 1}
                onPageChange={(page) => {
                  goToUrl('/shop/' + (page.selected + 1));
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
