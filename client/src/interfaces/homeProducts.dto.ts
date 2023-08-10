export type HomeProduct = {
  _id: string
  name: string
  image: {
    _type: string
    asset: {
      _ref: string
      _type: string
    }
  }
  price: string
  description: string[]
}

export type HomeProductsDto = {
  _id: string
  name: string
  products: HomeProduct[]
  specificTypes: {
    _id: string
    name: string
  }[]
}
