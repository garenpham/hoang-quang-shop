import HomePage from '@/components/Home/HomePage'

const getData = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/home`)
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export const revalidate = 0
export default async function Home() {
  const data = await getData()
  return <HomePage dataList={data} />
}
