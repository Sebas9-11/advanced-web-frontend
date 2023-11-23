import { Form, Input, InputNumber, Modal } from 'antd'
import { useEffect, useState } from 'react'
import HttpEmployeeApiService from '../../APIs/employee'
import { employee } from '../../types/types'

interface IEmployeeModalProps {
  open: boolean
  cancel: () => void
  setReload: (reload: boolean) => void
  initialValues?: employee
}

export default function EmployeeModal({
  open,
  cancel,
  setReload,
  initialValues,
}: IEmployeeModalProps) {
  const [form] = Form.useForm()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    form.setFieldsValue(initialValues)
  }, [initialValues, form])

  const handleCreate = async () => {
    try {
      setLoading(true)
      const values = await form.validateFields()
      const employeeData: employee = {
        rol_id: values.rol_id,
        name: values.name,
        last_name: values.last_name,
        status: values.state,
      }

      await HttpEmployeeApiService().addEmployee(employeeData)
    } catch (error) {
      console.error('Error creating employee:', error)
    } finally {
      setReload(true)
      setLoading(false)
      form.resetFields()
      cancel()
    }
  }

  const handleUpdate = async () => {
    try {
      setLoading(true)
      const values = await form.validateFields()
      const employeeData = {
        employee_id: initialValues?.employee_id,
        rol_id: values.rol_id,
        name: values.name,
        last_name: values.last_name,
        status: values.status,
      }

      // Assuming you have an `updateEmployee` method in HttpEmployeeApiService
      let id = initialValues?.employee_id
      await HttpEmployeeApiService().updateEmployee(employeeData, id)
    } catch (error) {
      console.error('Error updating employee:', error)
    } finally {
      setReload(true)
      setLoading(false)
      form.resetFields()
      cancel()
    }
  }

  return (
    <Modal
      visible={open}
      onCancel={cancel}
      onOk={initialValues?.employee_id ? handleUpdate : handleCreate}
      confirmLoading={loading}
    >
      <Form form={form} layout="vertical" initialValues={initialValues}>
        <Form.Item
          name="rol_id"
          label="Rol"
          rules={[{ required: true, message: 'Please input the rol' }]}
        >
          <InputNumber size="large" />
        </Form.Item>
        <Form.Item
          name="name"
          label="Name"
          rules={[{ required: true, message: 'Please input the name' }]}
        >
          <Input size="large" />
        </Form.Item>
        <Form.Item
          name="last_name"
          label="Last name"
          rules={[{ required: true, message: 'Please input the last name' }]}
        >
          <Input size="large" />
        </Form.Item>
        <Form.Item
          name="status"
          label="Status"
          rules={[{ required: true, message: 'Please input the state' }]}
        >
          <InputNumber size="large" />
        </Form.Item>
      </Form>
    </Modal>
  )
}
