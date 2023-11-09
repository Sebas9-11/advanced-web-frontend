type rolType = 'admin' | 'cortador' | 'guarnecedor' | 'ensamblador'

export interface rol {
  id: number
  name: rolType
}

export interface employee {
  id: number
  rol: rolType
  name: string
  lastName: string
  state: boolean
}

export interface product {
  id: number
  name: string
  price: number
  unitPayment: number
  packagePayment: number
  type: string
}

export interface production {
  id: number
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
