import styles from './styles.module.css'
import { farid } from '../../assets'

interface ILayoutProps {
  children: React.ReactNode
}

export default function HomeLayout({ children }: ILayoutProps) {
  return (
    <div className={styles.container}>
      <section className={styles.nav_bar}>
        <div className={styles.user_infto_container}>
          <img src={farid} alt="logo" className={styles.pict} />
          <h3 className={styles.name}>Farid Santiago</h3>
          <h4 className={styles.rol}>
            <span>Admin</span>
          </h4>
        </div>
        <div className={styles.container_list}>
          <h3 className={styles.menu_title}>Menu</h3>
          <article className={styles.list_navigation}>
            <h4 className={styles.subtitle}>Usuarios</h4>
            <h4 className={styles.subtitle}>Productos</h4>
            <h4 className={styles.subtitle}>Produccion</h4>
            <h4 className={styles.subtitle}>Roles</h4>
          </article>
        </div>
      </section>
      <section className={styles.section}>{children}</section>
    </div>
  )
}
