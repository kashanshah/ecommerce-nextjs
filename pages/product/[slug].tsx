import React from 'react';
import type { NextPage, NextPageContext } from 'next';
import { ProductScreen } from '../../src/screens/product';
import absoluteUrl from 'next-absolute-url/index';
import axios from 'axios';
import { IProduct } from '../../src/utils/data';

const Product: NextPage = (props: { product: IProduct }) => {
  return <ProductScreen product={props.product} />;
};

export default Product;

export async function getServerSideProps(ctx: NextPageContext) {
  const {
    query: { slug = '' },
    req,
  } = ctx;

  const { origin } = absoluteUrl(req);

  if (!slug) {
    return { props: {} };
  }

  const matches = (slug as string).match(/(.*)-(\d*)/);
  if (!matches) {
    return { props: { product: undefined } };
  }

  const { data } = await axios.get(`${origin}/api/products/${matches[2]}`);

  if (data?.variations?.length > 0) {
    // const { data: variations } = await axios.get(`${origin}/api/products/${matches[2]}`);
  }

  return { props: { product: data?.data } };
}
