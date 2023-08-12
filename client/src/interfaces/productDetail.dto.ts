export type productDetail = {
  _id: string
  name: string
  isAvailable: boolean
  image: {
    _type: string
    asset: {
      _ref: string
      _type: string
    }
  }
  price: string
  description: string[]
  generalType: string
  specificType: string
}
