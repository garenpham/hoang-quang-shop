import { client } from '@/utils/client'
import { getHomeContent } from '@/utils/queries'
import { NextResponse } from 'next/server'

export const revalidate = 0
export async function GET() {
  const data = await client.fetch(getHomeContent())
  return NextResponse.json(data, { status: 200 })
}
