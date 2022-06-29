// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { data, PageDataType } from './data';

export default async function handler(req: NextApiRequest, res: NextApiResponse<PageDataType['data']>) {
  // setTimeout(() => {
  res.status(200).json(data);
  // }, 5000);
}
