import { Route, Routes } from 'react-router-dom'
import { NotFound, Home, Login, AddProduct } from '../pages'

export default function MainStack() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />

      <Route path="/home" element={<Home />} />
      <Route path="/add_product" element={<AddProduct />} />

      <Route path="/NotFound" element={<NotFound />} />
    </Routes>
  )
}
