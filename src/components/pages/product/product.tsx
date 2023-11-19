import { useEffect, useState } from 'react'
import HttpProductsApiService from '../../../APIs/product'
import HomeLayout from '../../../layouts/homeLayout'
import { product, tableHeader } from '../../../types/types'
import BasicBtn from '../../basicBtn'
import Tables from '../../tables'
import styles from './product.module.css'

export default function ProductPage() {
  const [data, setData] = useState<product[]>([])
  const [header, setHeader] = useState<tableHeader[]>([])
  const httpProductsApiService = HttpProductsApiService()

  const getProducts = async () => {
    const res = await httpProductsApiService.getProduct()
    setData(res.data)

    const keys = Object.keys(res.data[0])
    const header: tableHeader[] = keys.map((key) => {
      const formattedKey = key
        .split('_')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')

      return {
        title: formattedKey,
        dataIndex: key,
        key: formattedKey,
      }
    })
    setHeader(header)
  }

  useEffect(() => {
    getProducts()
  }, [])

  const handleEdit = (product: product) => {
    console.log(product)
  }

  const handleDelete = (product: product) => {
    httpProductsApiService.deleteProduct(product.id)
  }

  return (
    <HomeLayout>
      <header className={styles.header}>
        <h1>Shoes Makers Inc.</h1>
      </header>
      <section>
        <div className={styles.btn_container}>
          <BasicBtn text="Add new product" color="blue" onClick={() => ''} />
        </div>
        <Tables
          data={data}
          header={header}
          ActionEdit={handleEdit}
          ActionDelete={handleDelete}
        />
      </section>
    </HomeLayout>
  )
}
