import { Button, Form, Input } from 'antd'
import styles from './styles.module.css'
import { toast } from 'sonner'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function LoginForm() {
  const [auth, setAuth] = useState<Boolean>(false)
  const navigate = useNavigate()

  const HandleLogin = () => {
    setAuth(true)
    if (auth) {
      navigate('/home')
    } else {
      toast('Invalid credentials')
    }
  }

  return (
    <div className={styles.container}>
      <h1>Shoes Makers Inc.</h1>
      <Form
        name="normal_login"
        className={styles.login_form}
        initialValues={{ remember: true }}
        // onFinish={onFinish}
      >
        <Form.Item
          name="user ID"
          rules={[{ required: true, message: 'Please input your user id!' }]}
        >
          <Input placeholder="Username" size="large" />
        </Form.Item>

        <Form.Item className={styles.form_login_content_button}>
          <Button
            type="primary"
            size="large"
            htmlType="submit"
            className={styles.form_login_button}
            onClick={HandleLogin}
          >
            Log in
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}
