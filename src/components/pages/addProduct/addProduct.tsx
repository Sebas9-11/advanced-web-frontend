import HomeLayout from '../../../layouts/homeLayout'
import styles from './AddProduct.module.css'
import Tables from '../../tables'
import { employeeData } from '../../../constants/employee'
import HttpEmployeeApiService from '../../../APIs/employee'
import { useEffect } from 'react'

export default function AddProductPage() {
  const apiService = HttpEmployeeApiService()

  useEffect(() => {
    apiService
      .get()
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <HomeLayout>
      <header className={styles.header}>
        <h1>Shoes Makers Inc.</h1>
      </header>
      <section>
        <Tables data={employeeData} />
      </section>
    </HomeLayout>
  )
}
