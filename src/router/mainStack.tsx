import { Route, Routes } from 'react-router-dom'
import { NotFound, Home, Login } from '../pages'

export default function MainStack() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />

      <Route path="/home" element={<Home />} />

      <Route path="/NotFound" element={<NotFound />} />
    </Routes>
  )
}
