export type HomeProductsDto = {
  _id: string
  name: string
  products: {
    _id: string
    name: string
    image: {
      // _type: string
      // asset: {
      //   _ref: string
      //   _type: string
      // }
    }
    price: string
    description: string[]
  }[]
  specificTypes: {
    _id: string
    name: string
  }[]
}
