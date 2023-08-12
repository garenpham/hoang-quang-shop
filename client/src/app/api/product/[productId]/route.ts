import { client } from '@/utils/client'
import { getProductDetail } from '@/utils/queries'
import { NextResponse } from 'next/server'

export const revalidate = 0
export async function GET(
  _req: Request,
  { params }: { params: { productId: string } }
) {
  const { productId } = params
  const data = await client.fetch(getProductDetail(productId))
  return NextResponse.json(data, { status: 200 })
}
