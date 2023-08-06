export const getAllImgUrl = () => {
  return `*[_type=='product']{
    name,
		type,
    price,
		description,
		isGallery,	
    image{
      asset->{
        url,
      }
    }
  }`
}

export const getAllImgGallery = () => {
  return `*[_type=='product' && isGallery]{
    name,
		type,
    price,
		description,
		isGallery,	
    image{
      asset->{
        url,
      }
    }
  }`
}

export const getAllImgSpecials = () => {
  return `*[_type=='product' && isSpecial]{
    name,
		type,
    price,
		description,
		isGallery,	
    image{
      asset->{
        url,
      }
    }
  }`
}

export const getSpecificImgUrl = (name: string | string[]) => {
  return `*[_type=='product' && name match '${name}']{
    name,
		type,
    price,
		description,
		isGallery,	
    image{
      asset->{
        url,
      }
    }
  }`
}
