export const getAllProducts = () => {
  return `*[_type=='product']{
    name,
    image,
    price,
    description,
    generalType->{
      name
    },
    specificType->{
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
