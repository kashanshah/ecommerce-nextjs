import React, { useEffect } from 'react';
import { Breadcrumb } from '../../components/breadcrumb';
import { MainBanner } from '../../components/main-banner/main-banner';
import { ShopFilters } from '../../components/shop/shop-filters';
import { ProductListing } from '../../components/shop/product-listing';
import { useQuery } from 'react-query';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useGoToUrl } from '../../utils/url';
import { Pagination } from '../../components/pagination';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

export const ShopScreen = () => {
  const {
    query,
    query: { page = 1 },
  } = useRouter();
  const goToUrl = useGoToUrl();
  const {
    isGridListing,
    orderBy: [orderBy, order],
  } = useSelector((state: RootState) => state.common);

  const limit = 20;

  const { isLoading, data, isFetching, refetch } = useQuery(
    ['shop-products', Number(page as string)],
    async () => {
      const response = await axios.post('/api/products/list', {
        per_page: limit,
        page: page,
        status: 'publish',
        order: order,
        orderby: orderBy,
      });
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
  }, [query, order, orderBy]);

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

            <div className={`row shop_wrapper ${isGridListing ? 'grid_3' : 'grid_list'}`}>
              <div className='row'>
                <ProductListing isLoading={isLoading || isFetching} products={data?.data} pageLimit={limit} />
              </div>
            </div>

            <div className='pagination_style pagination justify-content-center'>
              <Pagination
                pageCount={data?.totalPages}
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
