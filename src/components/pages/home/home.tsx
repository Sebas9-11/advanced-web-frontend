import styles from './home.module.css'
import { useAuth } from '../../../context/AuthContext'
import { AUTH_ACTION } from '../../../types/auth'

export default function HomePage() {
  const { state, dispatch } = useAuth()
  console.log(state.isAuth)

  const handleLogin = () => {
    dispatch({
      type: AUTH_ACTION.IS_AUTH,
      payload: {
        isAuth: false,
      },
    })
  }

  return (
    <div className={styles.container}>
      <h1> Home page</h1>
      <button onClick={handleLogin}>Login</button>
    </div>
  )
}
