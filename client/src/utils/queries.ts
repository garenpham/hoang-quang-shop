export const getAllProducts = () => {
  return `*[_type == 'product']{
    _id,
    name,
    manufacturer,
    isAvailable,
    images,
    price,
    description,
    generalType->{_id, name},
    specificType->{_id, name},
  }`
}

export const getProductDetail = (id: string | string[]) => {
  return `*[_type == 'product' && _id == '${id}']{
    _id,
    name,
    manufacturer,
    isAvailable,
    images,
    price,
    description,
    generalType->{_id, name},
    specificType->{_id, name},
  }`
}

export const getHomeContent = () => {
  return `*[_type == "generalType"] {
    _id,
    name,
    "products": *[_type == "product" && generalType._ref == ^._id] {
      _id,
      name,
      images,
      price,
      description,
    } | order(name asc),
    specificTypes[]->{
      _id,
      name
    }
  }`
}

export const getGeneralTypeProducts = (id: string) => {
  return `*[_type == "generalType" && _id == '${id}'] {
    _id,
    name,
    "products": *[_type == "product" && generalType._ref == ^._id] {
      _id,
      name,
      images,
      isAvailable,
      price,
      description,
    } | order(name asc)
  }`
}

export const getSpecificTypeProducts = (id: string) => {
  return `*[_type == "specificType" && _id == '${id}'] {
    _id,
    name,
    "products": *[_type == "product" && specificType._ref == ^._id] {
      _id,
      name,
      images,
      isAvailable,
      price,
      description,
    } | order(name asc),
  }`
}
