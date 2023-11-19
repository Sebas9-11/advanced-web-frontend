import { useEffect, useState } from 'react'
import HttpEmployeeApiService from '../../../APIs/employee'
import HomeLayout from '../../../layouts/homeLayout'
import { employee, tableHeader } from '../../../types/types'
import Tables from '../../tables'
import styles from './roles.module.css'

export default function RolesPage() {
  const [data, setData] = useState<employee[]>([])
  const [header, setHeader] = useState<tableHeader[]>([])
  const httpEmployeeApiService = HttpEmployeeApiService()

  const getEmployees = async () => {
    const res = await httpEmployeeApiService.getRoles()
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
    getEmployees()
  }, [])

  const handleEdit = (employee: employee) => {
    console.log(employee)
  }

  const handleDelete = (employee: employee) => {
    httpEmployeeApiService.deleteEmployee(employee.employee_id)
  }

  return (
    <HomeLayout>
      <header className={styles.header}>
        <h1>Shoes Makers Inc.</h1>
      </header>
      <section>
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
