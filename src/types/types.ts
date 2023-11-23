type rolType = 'admin' | 'cortador' | 'guarnecedor' | 'ensamblador' | ''

export interface rol {
  id: number
  name: rolType
}

export interface employee {
  employee_id?: number
  rol_id: number
  name: string
  last_name: string
  status: boolean
}

export interface product {
  product_id?: number
  name: string
  price: number
  pay_packet: number
  unit_payment: number
  type: string
}

export interface production {
  id?: number
  employeeId: number
  productId: number
  quantity: number
  date: string
}

export interface employeeProduction {
  id: number
  name: string
  lastName: string
  productName: string
  unitPayment: number
  packagePayment: number
  quantity: number
  date: string
  price: number
}

export interface tableHeader {
  title: string
  dataIndex: string
  key: string
  actions?: React.ReactNode
}
