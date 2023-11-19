import { Button } from 'antd'
import styles from './style.module.css'

interface IBasicBtnProps {
  text: string
  onClick: () => void
  color?: string
}

export default function BasicBtn({ text, onClick, color }: IBasicBtnProps) {
  return (
    <Button
      className={styles.basic_btn}
      style={{ backgroundColor: color }}
      onClick={onClick}
    >
      {text}
    </Button>
  )
}
