export const getAllProducts = () => {
  return `*[_type == 'product']{
    _id,
    name,
    image,
    price,
    description,
    generalType->{
      _id,
      name
    },
    specificType->{
      _id,
      name
    }
  }`
}

export const getProductDetail = (id: string | string[]) => {
  return `*[_type == 'product' && _id == '${id}']{
    _id,
    name,
    image,
    price,
    description,
    generalType->{
      _id,
      name
    },
    specificType->{
      _id,
      name
    }
  }`
}

export const getHomeContent = () => {
  return `*[_type == "generalType"] {
    _id,
    name,
    "products": *[_type == "product" && generalType._ref == ^._id] {
      _id,
      name,
      image,
      price,
      description,
    },
    specificTypes[]->{
      _id,
      name
    }
  }`
}

export const getGeneralTypeProducts = (name: string) => {
  return `*[_type == "generalType" && name match '${name}'] {
    _id,
    name,
    "products": *[_type == "product" && generalType._ref == ^._id] {
      _id,
      name,
      image,
      price,
      description,
    },
    specificTypes[]->{
      _id,
      name
    }
  }`
}

export const getSpecificTypeProducts = (name: string) => {
  return `*[_type == "specificType" && name match '${name}] {
    _id,
    name,
    "products": *[_type == "product" && specificType._ref == ^._id] {
      _id,
      name,
      image,
      price,
      description,
    }
  }`
}
