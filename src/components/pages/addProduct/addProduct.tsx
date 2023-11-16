import HomeLayout from '../../../layouts/homeLayout'
import styles from './addProduct.module.css'
import Tables from '../../tables'
import { useEffect, useState } from 'react'
import HttpEmployeeApiService from '../../../APIs/employee'
import { Modal, Form, Input, Button, InputNumber } from 'antd'
import { employee } from '../../../types/types'

export default function AddProductPage() {
  const [form] = Form.useForm()
  const [data, setData] = useState([])
  const [openModal, setopenModal] = useState(false)

  useEffect(() => {
    const httpEmployeeApiService = HttpEmployeeApiService()
    httpEmployeeApiService.getEmployees(setData)
  }, [])

  const add = (data: employee) => {
    const httpEmployeeApiService = HttpEmployeeApiService()
    console.log(data)

    httpEmployeeApiService.addEmployee(data)
  }

  return (
    <HomeLayout>
      <header className={styles.header}>
        <h1>Shoes Makers Inc.</h1>
      </header>
      <section>
        <Tables data={data} onClick={() => setopenModal(true)} />
      </section>

      <Modal
        title="Add new employee"
        centered
        open={openModal}
        onOk={() => setopenModal(false)}
        onCancel={() => setopenModal(false)}
      >
        <Form form={form} onFinish={add} name="addEmployee">
          <Form.Item
            name="name"
            label="Nombre"
            rules={[{ required: true, message: 'Please input your name!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="last_name"
            label="Apellido"
            rules={[
              { required: true, message: 'Please input your last name!' },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="rol_id"
            label="Rol"
            rules={[{ required: true, message: 'Please input your rol!' }]}
          >
            <InputNumber />
          </Form.Item>

          <Form.Item
            name="state"
            label="Estado"
            rules={[{ required: true, message: 'Please input your state!' }]}
          >
            <InputNumber />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Add
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </HomeLayout>
  )
}
