import { Button } from 'antd'
import { useNavigate } from 'react-router-dom'
import { farid } from '../../assets'
import styles from './styles.module.css'

interface ILayoutProps {
  children: React.ReactNode
}

export default function HomeLayout({ children }: ILayoutProps) {
  const navigate = useNavigate()

  const handleNavigation = (path: string) => {
    navigate(path)
  }

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
            <Button
              className={styles.subtitle}
              onClick={() => handleNavigation('/employee')}
            >
              Usuarios
            </Button>
            <Button
              className={styles.subtitle}
              onClick={() => handleNavigation('/product')}
            >
              Productos
            </Button>
            <Button
              className={styles.subtitle}
              onClick={() => handleNavigation('/production')}
            >
              Produccion
            </Button>
            <Button
              className={styles.subtitle}
              onClick={() => handleNavigation('/roles')}
            >
              Roles
            </Button>
          </article>
        </div>
      </section>
      <section className={styles.section}>{children}</section>
    </div>
  )
}
