import { Table, Space, Button } from 'antd'
import styles from './styles.module.css'

interface ITablesProps {
  data: any
  onClick: () => void
}

const columns = [
  {
    title: 'ID',
    dataIndex: 'employee_id',
    key: 'employee_id',
  },
  {
    title: 'Nombre',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Apellido',
    dataIndex: 'last_name',
    key: 'last_name',
  },
  {
    title: 'Rol',
    dataIndex: 'rol_id',
    key: 'rol_id',
  },
  {
    title: 'Estado',
    dataIndex: 'state',
    key: 'state',
    render: (state: boolean) => (state ? 'Activo' : 'Inactivo'),
  },
  {
    title: 'Acciones',
    key: 'action',
    render: () => (
      <Space size="middle">
        <Button type="primary">Edit</Button>
        <Button type="primary" danger>
          Delete
        </Button>
      </Space>
    ),
  },
]

export default function Tables({ data, onClick }: ITablesProps) {
  return (
    <div className={styles.table_container}>
      <Space>
        <Button className={styles.add_employee_btn} onClick={onClick}>
          Add
        </Button>
      </Space>
      <Table dataSource={data} columns={columns} />
    </div>
  )
}
