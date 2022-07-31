import WooCommerceRestApi from '@woocommerce/woocommerce-rest-api';
import { IProduct } from './data';

export const woocommerce = new WooCommerceRestApi({
  url: 'https://www.hurf.pk',
  consumerKey: 'ck_132ff8fe18d4b1bbc7ce8d128c70ed081d4231e4',
  consumerSecret: 'cs_2132d497a1820fe4294b25d099c51b8613031c3b',
  version: 'wc/v3',
});

export const getProductStockLabel = (stockStatus: IProduct['stock_status']) => {
  if (stockStatus === 'instock') {
    return 'In Stock';
  }

  if (stockStatus === 'outofstock') {
    return 'Out of Stock';
  }

  if (stockStatus === 'onbackorder') {
    return 'On back order';
  }
};
