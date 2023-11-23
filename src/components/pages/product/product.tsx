import { useEffect, useState } from 'react'
import HttpProductsApiService from '../../../APIs/product'
import HomeLayout from '../../../layouts/homeLayout'
import { product, tableHeader } from '../../../types/types'
import BasicBtn from '../../basicBtn'
import ProductModal from '../../modals/productModal'
import Tables from '../../tables'
import styles from './product.module.css'

export default function ProductPage() {
  const [data, setData] = useState<product[]>([])
  const [header, setHeader] = useState<tableHeader[]>([])
  const httpProductsApiService = HttpProductsApiService()
  const [open, setOpen] = useState<boolean>(false)
  const [reload, setReload] = useState<boolean>(false)
  const [initialValues, setInitialValues] = useState<product>()
  const [openEdit, setOpenEdit] = useState<boolean>(false)

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
  }, [reload])

  const handleEdit = (product: product) => {
    setInitialValues(product)
    setOpenEdit(true)
  }

  const handleDelete = (product: product) => {
    try {
      httpProductsApiService.deleteProduct(product.product_id as number)
    } catch (error) {
      console.error('Error deleting product:', error)
    } finally {
      setReload(true)
    }
  }

  const handleCloseModal = () => {
    setInitialValues(undefined)
    setOpenEdit(false)
  }

  return (
    <HomeLayout>
      <header className={styles.header}>
        <h1>Shoes Makers Inc.</h1>
      </header>
      <section>
        <div className={styles.btn_container}>
          <BasicBtn
            text="Add product"
            color="blue"
            onClick={() => setOpen(!open)}
          />
        </div>
        <Tables
          textBtn1='editar'
          textBtn2='eliminar'
          data={data}
          header={header}
          ActionEdit={handleEdit}
          ActionDelete={handleDelete}
        />
      </section>
      <ProductModal
        open={open}
        cancel={() => setOpen(!open)}
        setReload={setReload}
      />
      <ProductModal
        open={openEdit}
        cancel={() => handleCloseModal()}
        setReload={setReload}
        initialValues={initialValues}
      />
    </HomeLayout>
  )
}
