export type productDetail = {
  _id: string
  name: string
  manufacturer: string
  isAvailable: boolean
  images: {
    _type: string
    asset: {
      _ref: string
      _type: string
    }
  }[]
  price: string
  description: string[]
  generalType: string
  specificType: string
}
