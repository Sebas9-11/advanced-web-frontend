// @ts-ignore
import pdfMake from 'pdfmake/build/pdfmake'
import { default as pdfFonts } from 'pdfmake/build/vfs_fonts'
import { useEffect, useState } from 'react'
import HomeLayout from '../../../layouts/homeLayout'
import { production, tableHeader } from '../../../types/types'
import Tables from '../../tables'
import HttpProductionApiService from './../../../APIs/production'
import styles from './production.module.css'

pdfMake.vfs = pdfFonts.pdfMake.vfs

export default function ProductionPage() {
  const [data, setData] = useState<production[]>([])
  const [header, setHeader] = useState<tableHeader[]>([])
  const httpEmployeeApiService = HttpProductionApiService()

  const today = new Date()

  const generatePdf = (production: production) => {
    const documentDefinition = {
      content: [
        {
          text: 'Shoes Makers Inc.',
          fontSize: 16,
          bold: true,
        },
        {
          text: `empleado: ${production.primer_nombre} ${production.apellido}`,
          fontSize: 12,
          margin: 5,
        },
        {
          text: `rol: ${production.nombre_rol}`,
          fontSize: 12,
          margin: 5,
        },
        {
          text: `producto: ${production.nombre_producto}`,
          fontSize: 12,
          margin: 5,
        },
        {
          text: `cantidad: ${production.cantidad}`,
          fontSize: 12,
          margin: 5,
        },
        {
          text: `fecha: ${today.getDate()}/${today.getMonth()}/${today.getFullYear()}`,
          fontSize: 12,
          margin: 5,
        },
      ],
    }
    pdfMake.createPdf(documentDefinition).open()
  }

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

  const handleEdit = (production: production) => {
    generatePdf(production)
  }

  const handleDelete = () => {
    // httpEmployeeApiService.deleteEmployee(employee?.employee_id as number)
  }

  return (
    <HomeLayout>
      <header className={styles.header}>
        <h1>Shoes Makers Inc.</h1>
      </header>
      <section>
        <Tables
          textBtn1="pdf"
          textBtn2="delete"
          data={data}
          header={header}
          ActionEdit={handleEdit}
          ActionDelete={handleDelete}
        />
      </section>
    </HomeLayout>
  )
}
