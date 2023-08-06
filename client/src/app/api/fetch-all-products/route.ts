// import { client } from '@/utils/client'
// import { getAllImgGallery } from '@/utils/queries'
import { NextResponse } from 'next/server'

export async function GET() {
  // if (req.method === 'GET') {
  //   const query = getAllImgGallery()
  //   const data = await client.fetch(query)
  //   res.status(200).json(data)
  // }
  return NextResponse.json({ title: 'hello' }, { status: 200 })
}
