import HomeLayout from '../../../layouts/homeLayout'
import styles from './home.module.css'

export default function HomePage() {
  return (
    <HomeLayout>
      <div className={styles.container}>
        <h1>Shoes Makers Inc.</h1>
      </div>
    </HomeLayout>
  )
}
