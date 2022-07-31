// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { woocommerce } from '../../../src/utils/wc';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const response = await woocommerce.get('products/' + req.query['id']).then((response) => {
    return {
      data: response.data,
      total: response.headers['x-wp-total'],
      totalPages: response.headers['x-wp-totalpages'],
    };
  });

  let variations = response.data?.variations ?? [];

  if (response.data?.variations?.length > 0) {
    const variationsRes = await woocommerce.get(
      'products/' + req.query['id'] + '/variations?per_page=' + response.data?.variations?.length
    );
    variations = variationsRes?.data;
  }

  res.status(200).json({ data: { ...response?.data, variations: variations } });
}
