import { client } from '@/utils/client'
import { getAllImgGallery } from '@/utils/queries'
import type { NextApiRequest, NextApiResponse } from 'next'
import { NextResponse } from 'next/server'

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  // const query = getAllImgGallery()
  // const data = await client.fetch(query)
  // res.status(200).json(data)

  return NextResponse.json({ title: 'hello' })
}
