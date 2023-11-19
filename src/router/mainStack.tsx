import { Route, Routes } from 'react-router-dom'
import { Employee, Home, Login, NotFound, Product, Roles } from '../pages'

export default function MainStack() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />

      <Route path="/home" element={<Home />} />
      <Route path="/employee" element={<Employee />} />
      <Route path="/roles" element={<Roles />} />
      <Route path="/product" element={<Product />} />

      <Route path="/NotFound" element={<NotFound />} />
    </Routes>
  )
}
