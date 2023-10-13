import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <h1> <a href='http://localhost:8080/items'> Click here to go to items </a> </h1>
    </main>
  )
}
