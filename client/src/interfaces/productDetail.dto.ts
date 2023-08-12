export type productDetail = {
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
  generalType: {
    _id: string
    name: string
  }
  specificType: {
    _id: string
    name: string
  }
}
