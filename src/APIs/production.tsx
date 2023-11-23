import axios from 'axios'
import { product } from '../types/types'

export default function HttpProductionApiService() {
  const path = 'https://farid2.pythonanywhere.com/'

  function getProduction() {
    return axios.get(path + 'produccion/total')
  }

  function deleteProduct(id: number) {
    return axios.delete(path + 'products/' + id)
  }

  function addProduct(product: product) {
    return axios.post(path + 'products', product)
  }

  function updateProduct(product: product, id: number) {
    return axios.put(path + 'products/' + id, product)
  }

  return {
    getProduction,
    deleteProduct,
    addProduct,
    updateProduct,
  }
}
