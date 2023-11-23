import { Button } from 'antd'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useUser } from '../../context/UserContext'
import styles from './styles.module.css'

interface ILayoutProps {
  children: React.ReactNode
}

export default function HomeLayout({ children }: ILayoutProps) {
  const { state } = useUser()
  const navigate = useNavigate()

  useEffect(() => {
    if (state.currentUser.employee_id === 0) {
      navigate('/')
    }
  }, [state.currentUser])

  const handleNavigation = (path: string) => {
    navigate(path)
  }

  const adminLock = (children: React.ReactNode) => {
    console.log(state.currentUser.rol_id)

    if (state.currentUser.rol_id === 1) {
      return children
    }
    return null
  }

  return (
    <div className={styles.container}>
      <section className={styles.nav_bar}>
        <div className={styles.user_infto_container}>
          <h3
            className={styles.name}
          >{`${state.currentUser.name} ${state.currentUser.last_name}`}</h3>
          <h4 className={styles.rol}>
            <span>
              {state.currentUser.rol_id === 1 ? 'Administrador' : 'Empleado'}
            </span>
          </h4>
        </div>
        <div className={styles.container_list}>
          <h3 className={styles.menu_title}>Menu</h3>
          <article className={styles.list_navigation}>
            {adminLock(
              <Button
                className={styles.subtitle}
                onClick={() => handleNavigation('/employee')}
              >
                Usuarios
              </Button>
            )}
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
            {adminLock(
              <Button
                className={styles.subtitle}
                onClick={() => handleNavigation('/roles')}
              >
                Roles
              </Button>
            )}
          </article>
        </div>
      </section>
      <section className={styles.section}>{children}</section>
    </div>
  )
}
