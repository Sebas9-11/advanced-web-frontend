import { Table } from 'antd'
import { tableHeader } from '../../types/types'
import BasicBtn from '../basicBtn'
import styles from './styles.module.css'

interface ITablesProps {
  header: tableHeader[]
  data: any[]
  ActionEdit: (record: any) => void
  ActionDelete: (record: any) => void
}

export default function Tables({
  data,
  header,
  ActionEdit,
  ActionDelete,
}: ITablesProps) {
  const renderActionsColumn = (_text: string, record: any) => {
    return (
      <div className={styles.actions}>
        <BasicBtn
          text="Editar"
          color="#28a745"
          onClick={() => ActionEdit(record)}
        />
        <BasicBtn
          text="Eliminar"
          color="#dc3545"
          onClick={() => ActionDelete(record)}
        />
      </div>
    )
  }

  const columns = [
    ...header,
    {
      title: 'Acciones',
      dataIndex: 'actions',
      key: 'actions',
      render: renderActionsColumn,
    },
  ]

  return (
    <div className={styles.table_container}>
      <Table dataSource={data} columns={columns} />
    </div>
  )
}
