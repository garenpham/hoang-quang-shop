import { relatedProductDto } from '@/interfaces/relatedProduct.dto'
import { client } from '@/utils/client'
import {
  getGeneralTypeProducts,
  getProductDetail,
  getSpecificTypeProducts,
} from '@/utils/queries'
import { NextResponse } from 'next/server'

export const revalidate = 0
export async function GET(
  _req: Request,
  { params }: { params: { productId: string } }
) {
  const { productId } = params
  const productData = await client.fetch(getProductDetail(productId))
  const generalTypeId = productData[0].generalType._id
  const generalTypeProducts = await client.fetch(
    getGeneralTypeProducts(generalTypeId)
  )

  let relatedProducts: relatedProductDto[] = generalTypeProducts[0].products

  const specificTypeId = productData[0].specificType._id
  const specificTypeProductsData = await client.fetch(
    getSpecificTypeProducts(specificTypeId)
  )
  for (const product of specificTypeProductsData[0].products) {
    if (!relatedProducts.some((p) => p._id === product._id)) {
      relatedProducts.push(product)
    }
  }

  return NextResponse.json(relatedProducts, { status: 200 })
}
