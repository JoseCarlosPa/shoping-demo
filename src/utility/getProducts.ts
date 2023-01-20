const getProducts = async () => {
  const response = await fetch('https://example.com/products')
  const data = await response.json()
  return data
}

export default getProducts