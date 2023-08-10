import { client } from '@/utils/client'
import { getHomeContent } from '@/utils/queries'
import { NextResponse } from 'next/server'

export async function GET() {
  const data = await client.fetch(getHomeContent(), {
    next: { revalidate: 0 },
  })
  return NextResponse.json(data, { status: 200 })
}
