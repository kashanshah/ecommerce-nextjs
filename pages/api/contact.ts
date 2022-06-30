// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import axios, { AxiosResponse } from 'axios';

export default async function handler(req: NextApiRequest, res: NextApiResponse<AxiosResponse>) {
  const data = req.body;
  if (process.env.NODE_ENV === 'development') {
    data.isTestingStatus = 'true';
  }

  const response = await axios
    .post('http://kashanshah.000webhostapp.com/contact.php', data, {
      withCredentials: true,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'multipart/form-data',
        Accept: 'application/json, text/plain, */*',
      },
    })
    .catch((error) => {
      return error.response;
    });

  res.status(response.status).json(response?.data);
}
