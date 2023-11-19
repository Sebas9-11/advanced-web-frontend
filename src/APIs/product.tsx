import axios from 'axios'

export default function HttpProductsApiService() {
  const path = 'https://shoes-maker-78e124fd97e0.herokuapp.com/'

  function getProduct() {
    return axios.get(path + 'products')
  }

  function deleteProduct(id: number) {
    return axios.delete(path + 'products/' + id)
  }

  return {
    getProduct,
    deleteProduct,
  }
}
