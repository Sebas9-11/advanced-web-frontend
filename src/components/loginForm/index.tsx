import { Button, Form, InputNumber } from 'antd'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import HttpEmployeeApiService from '../../APIs/employee'
import { useUser } from '../../context/UserContext'
import { employee } from '../../types/types'
import { USER_ACTION } from '../../types/user'
import styles from './styles.module.css'

export default function LoginForm() {
  const httpEmployeService = HttpEmployeeApiService()
  const { dispatch } = useUser()
  const navigate = useNavigate()

  const HandleLogin = (id: number) => {
    httpEmployeService
      .getEmployees()
      .then((res) => {
        const employees = res.data
        const employee = employees.find((employee: employee) => {
          if (employee.employee_id === id) {
            dispatch({
              type: USER_ACTION.CURRENT_USER,
              payload: { currentUser: employee },
            })
          }
          return employee.employee_id === id
        })
        if (employee) {
          navigate('/product')
        } else {
          toast.error('User not found!')
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <div className={styles.container}>
      <h1>Shoes Makers Inc.</h1>
      <Form
        name="basic"
        className={styles.login_form}
        initialValues={{ remember: true }}
        onFinish={(values) => HandleLogin(values.id)}
      >
        <Form.Item
          label="ID"
          name="id"
          rules={[{ required: true, message: 'Please input your ID!' }]}
          className={styles.form_item}
        >
          <InputNumber type="number" size="large" className={styles.input} />
        </Form.Item>

        <Form.Item className={styles.form_login_content_button}>
          <Button
            className={styles.form_login_button}
            type="primary"
            htmlType="submit"
          >
            Login
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}
