import { useAuth } from '../../../context/AuthContext'
import { AUTH_ACTION } from '../../../types/auth'
import styles from './login.module.css'
import { useNavigate } from 'react-router-dom'

export default function LoginPage() {
  const { state, dispatch } = useAuth()
  const navigate = useNavigate()
  console.log(state.isAuth)

  const handleLogin = () => {
    dispatch({
      type: AUTH_ACTION.IS_AUTH,
      payload: {
        isAuth: true,
      },
    })

    if (state.isAuth) {
      navigate('/home')
    }
  }

  return (
    <div className={styles.container}>
      <h1>Login page</h1>
      <button onClick={() => handleLogin()} className={styles.btn_login}>
        Login
      </button>
    </div>
  )
}
