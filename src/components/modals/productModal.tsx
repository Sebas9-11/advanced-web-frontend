import { Form, Input, InputNumber, Modal } from 'antd'
import { useEffect, useState } from 'react'
import HttpProductsApiService from '../../APIs/product'
import { product } from '../../types/types'

interface IProductModalProps {
  open: boolean
  cancel: () => void
  setReload: (reload: boolean) => void
  initialValues?: product
}

export default function ProductModal({
  open,
  cancel,
  setReload,
  initialValues,
}: IProductModalProps) {
  const [form] = Form.useForm()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    form.setFieldsValue(initialValues)
  }, [initialValues, form])

  const handleCreate = async () => {
    try {
      setLoading(true)
      const values = await form.validateFields()
      const productData: product = {
        name: values.name,
        price: values.price,
        pay_packet: values.pay_packet,
        type: values.type,
        unit_payment: values.unit_payment,
      }

      console.log(productData)
      await HttpProductsApiService().addProduct(productData)
    } catch (error) {
      console.error('Error creating product:', error)
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
      const productData = {
        product_id: initialValues?.product_id,
        name: values.name,
        price: values.price,
        pay_packet: values.pay_packet,
        type: values.type,
        unit_payment: values.unit_payment,
      }

      let id = initialValues?.product_id
      await HttpProductsApiService().updateProduct(productData, id as number)
    } catch (error) {
      console.error('Error updating product:', error)
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
      onOk={initialValues?.product_id ? handleUpdate : handleCreate}
      confirmLoading={loading}
      okButtonProps={{
        disabled:
          !form.isFieldsTouched(true) ||
          form.getFieldsError().filter(({ errors }) => errors.length).length >
            0,
      }}
    >
      <Form form={form} layout="vertical">
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: 'Please enter a name' }]}
        >
          <Input size="large" />
        </Form.Item>
        <Form.Item
          label="Price"
          name="price"
          rules={[{ required: true, message: 'Please enter a price' }]}
        >
          <InputNumber size="large" />
        </Form.Item>
        <Form.Item
          label="Pay Packet"
          name="pay_packet"
          rules={[{ required: true, message: 'Please enter a pay packet' }]}
        >
          <InputNumber size="large" />
        </Form.Item>
        <Form.Item
          label="Type"
          name="type"
          rules={[{ required: true, message: 'Please enter a type' }]}
        >
          <Input size="large" />
        </Form.Item>
        <Form.Item
          label="Unit Payment"
          name="unit_payment"
          rules={[{ required: true, message: 'Please enter a unit payment' }]}
        >
          <InputNumber size="large" />
        </Form.Item>
      </Form>
    </Modal>
  )
}
