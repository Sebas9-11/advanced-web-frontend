import { Table } from 'antd'

interface ITablesProps {
  data: any
}

const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Nombre',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Apellido',
    dataIndex: 'lastName',
    key: 'lastName',
  },
  {
    title: 'Rol',
    dataIndex: 'rol',
    key: 'rol',
  },
  {
    title: 'Estado',
    dataIndex: 'state',
    key: 'state',
    render: (state: boolean) => (state ? 'Activo' : 'Inactivo'),
  },
]

export default function Tables({ data }: ITablesProps) {
  return <Table dataSource={data} columns={columns} />
}
