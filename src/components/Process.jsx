import Navbar from './Navbar'
import styles from './Process.module.css'

export default function Process() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.toast}>
          Página en construcción
        </div>
        <p> Estaremos publicando videos de nuestro proceso para crear la obra "manos artesanas" </p>
        {/* <p> Por lo pronto, dejamos aqui algunos timelapses </p> */}
      </div>
      <Navbar />
    </>
  )
}
