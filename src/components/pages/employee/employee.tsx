import { useEffect, useState } from 'react'
import HttpEmployeeApiService from '../../../APIs/employee'
import HomeLayout from '../../../layouts/homeLayout'
import { employee, tableHeader } from '../../../types/types'
import BasicBtn from '../../basicBtn'
import EmployeeModal from '../../modals/employeeModal'
import Tables from '../../tables'
import styles from './employee.module.css'

export default function EmployeePage() {
  const [data, setData] = useState<employee[]>([])
  const [header, setHeader] = useState<tableHeader[]>([])
  const httpEmployeeApiService = HttpEmployeeApiService()
  const [open, setOpen] = useState<boolean>(false)
  const [initialValues, setInitialValues] = useState<employee>()
  const [openEdit, setOpenEdit] = useState<boolean>(false)
  const [reload, setReload] = useState<boolean>(false)

  const getEmployees = async () => {
    const res = await httpEmployeeApiService.getEmployees()
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
  }, [reload])

  const handleEdit = (employee: employee) => {
    setInitialValues(employee)
    setOpenEdit(true)
  }

  const handleDelete = (employee: employee) => {
    try {
      httpEmployeeApiService.deleteEmployee(employee.employee_id as number)
    } catch (error) {
      console.error('Error deleting employee:', error)
    } finally {
      setReload(true)
    }
  }

  const handleModal = () => {
    setOpen(!open)
  }

  const handleCloseModal = () => {
    console.log('close modal', initialValues)

    setInitialValues(undefined)
    setOpenEdit(false)
    console.log('close modal', initialValues)
  }

  return (
    <HomeLayout>
      <header className={styles.header}>
        <h1>Shoes Makers Inc.</h1>
      </header>
      <section>
        <BasicBtn
          text="Add product"
          color="blue"
          onClick={() => handleModal()}
        />
        <Tables
          data={data}
          header={header}
          ActionEdit={handleEdit}
          ActionDelete={handleDelete}
        />
      </section>
      <EmployeeModal
        open={open}
        cancel={() => handleModal()}
        setReload={setReload}
      />
      <EmployeeModal
        open={openEdit}
        cancel={() => handleCloseModal()}
        setReload={setReload}
        initialValues={initialValues}
      />
    </HomeLayout>
  )
}
