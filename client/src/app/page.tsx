import HomePage from '@/components/Home/HomePage'
import getBasePath from '@/utils/getBasePath'

export const revalidate = 0
const getData = async () => {
  const res = await fetch(`${getBasePath()}/api/home`)
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export default async function Home() {
  const data = await getData()
  return <HomePage dataList={data} />
}
