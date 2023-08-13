export const formatPrice = (price: string) => {
  let formattedPrice = ''
  let count = 0
  for (let i = price.length - 1; i >= 0; i--) {
    if (count === 3) {
      formattedPrice = ',' + formattedPrice
      count = 0
    }
    formattedPrice = price[i] + formattedPrice
    count++
  }
  return formattedPrice
}
