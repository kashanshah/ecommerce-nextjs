import React, { useState } from 'react';
import { Breadcrumb } from '../../components/breadcrumb';
import { MainBanner } from '../../components/main-banner/main-banner';
import { ShopFilters } from '../../components/shop/shop-filters';
import { ProductListing } from '../../components/shop/product-listing';
import { useRouter } from 'next/router';
import { useGoToUrl } from '../../utils/url';
import { Pagination } from '../../components/pagination';
import { IProductCategory, ListProducts } from '../../utils/data';

export const ProductCategoryScreen = (props: { products: ListProducts; category?: IProductCategory }) => {
  const { products, category } = props;
  const {
    query: { page = 1, slug, id },
  } = useRouter();
  const goToUrl = useGoToUrl();

  const [isGrid, setIsGrid] = useState(true);

  const limit = 12;

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
                  path: '/shop',
                  breadcrumbName: 'Shop',
                },
                {
                  path: category?.slug + '-' + category?.id,
                  breadcrumbName: category?.name,
                },
              ]}
            />

            <MainBanner />

            <ShopFilters totalProducts={products?.total} />

            <div className={`row shop_wrapper ${isGrid ? 'grid_3' : 'grid_list'}`}>
              <div className='row'>
                <ProductListing isLoading={false} products={products?.data} pageLimit={limit} />
              </div>
            </div>

            <div className='pagination_style pagination justify-content-center'>
              <Pagination
                pageCount={products?.totalPages}
                forcePage={Number(page as string) - 1}
                onPageChange={(page) => {
                  goToUrl(`/product-category/${slug}-${id}/${page.selected + 1}`);
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
