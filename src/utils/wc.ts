import WooCommerceRestApi from '@woocommerce/woocommerce-rest-api';
import { IProduct } from './data';

export const woocommerce = new WooCommerceRestApi({
  url: 'https://www.organicalfoods.com',
  consumerKey: 'ck_9f39b08c6e1c6dde01e04c5c7bdd0c28e848a52e',
  consumerSecret: 'cs_dc9fdbcf3f9e8be96f6850e4aaabab598f50afec',
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
