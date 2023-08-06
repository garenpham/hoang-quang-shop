import { client } from '@/utils/client'
import { getAllImgGallery } from '@/utils/queries'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    const query = getAllImgGallery()
    const data = await client.fetch(query)
    res.status(200).json(data)
  }
}
