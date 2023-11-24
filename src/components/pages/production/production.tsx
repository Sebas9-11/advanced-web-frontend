import { useEffect, useState } from 'react'
import HomeLayout from '../../../layouts/homeLayout'
import { production, tableHeader } from '../../../types/types'
import Tables from '../../tables'
import styles from './production.module.css'
import HttpProductionApiService from './../../../APIs/production';
import pdfMake from 'pdfmake/build/pdfmake'


export default function ProductionPage() {
  const [data, setData] = useState<production[]>([])
  const [header, setHeader] = useState<tableHeader[]>([])
  const httpEmployeeApiService = HttpProductionApiService()

  const getEmployees = async () => {
    const res = await httpEmployeeApiService.getProduction()
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

  const dd = {
    content: [
      {
        style: 'tableExample',
        table: {
          widths: ['*'],
          body: [],
        },
      },
    ],
  }


  const handleEdit = () => {
    pdfMake.createPdf(dd).open()
  }

  const handleDelete = (employee: production) => {
    // httpEmployeeApiService.deleteEmployee(employee?.employee_id as number)
  }

  return (
    <HomeLayout>
      <header className={styles.header}>
        <h1>Shoes Makers Inc.</h1>
      </header>
      <section>
        <Tables
          textBtn1='pdf'
          textBtn2='delete'
          data={data}
          header={header}
          ActionEdit={handleEdit}
          ActionDelete={handleDelete}
        />
      </section>
    </HomeLayout>
  )
}
