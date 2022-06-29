// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const params = new URLSearchParams(req.body || {}).toString();

  const response = await axios({
    method: 'GET',
    url: 'https://portal.sablayjao.pk/api/inventory/list.php?' + params,
    withCredentials: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'multipart/form-data',
      Accept: 'application/json, text/plain, */*',
    },
  }).catch((error) => {
    return error.response;
  });

  const result = response.data;

  res.status(200).json({
    ...result,
    data: result?.data.map((product) => ({
      ...product,
      image: 'https://portal.sablayjao.pk/uploads/inventory/' + product.image,
    })),
  });
}
