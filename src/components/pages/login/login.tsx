import { factoryShoes } from '../../../assets'
import LoginForm from '../../loginForm'
import styles from './login.module.css'

export default function LoginPage() {
  return (
    <div className={styles.container}>
      <section className={styles.form_container}>
        <img src={factoryShoes} alt="Logo" className={styles.shoes_factory} />
        <LoginForm />
      </section>
    </div>
  )
}
