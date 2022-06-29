import React, { useEffect, useState } from 'react';
import { Breadcrumb } from '../../components/breadcrumb';
import { MainBanner } from '../../components/main-banner/main-banner';
import { ShopFilters } from '../../components/shop/shop-filters';
import { ProductListing } from '../../components/shop/product-listing';
import { useMutation } from 'react-query';
import axios, { AxiosError } from 'axios';
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

  const limit = 21;
  const offset = limit * Number(page as string);

  const { isLoading, mutate, data } = useMutation<
    { data: any[]; total: number; offset: number; limit: number },
    AxiosError,
    { limit?: number; offset?: number }
  >({
    mutationKey: 'shop-products',
    mutationFn: async (data) => {
      const response = await axios.post('/api/products/list', data);
      return response?.data;
    },
  });

  useEffect(() => {
    mutate({ limit: limit, offset: offset });
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
                <ProductListing isLoading={isLoading} products={data?.data} pageLimit={limit} />
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
