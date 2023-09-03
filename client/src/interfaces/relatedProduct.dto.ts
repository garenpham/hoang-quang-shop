export type relatedProductDto = {
  _id: string
  name: string
  images: {
    _type: string
    _key: string
    asset: {
      _ref: string
      _type: string
    }
  }[]
  price: string
  isAvailable: boolean
  description: string[]
}
