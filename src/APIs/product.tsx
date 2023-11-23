import axios from 'axios'
import { product } from '../types/types'

export default function HttpProductsApiService() {
  const path = 'https://shoes-maker-78e124fd97e0.herokuapp.com/'

  function getProduct() {
    return axios.get(path + 'products')
  }

  function deleteProduct(id: number) {
    return axios.delete(path + 'products/' + id)
  }

  function addProduct(product: product) {
    return axios.post(path + 'products', product)
  }

  return {
    getProduct,
    deleteProduct,
    addProduct,
  }
}
