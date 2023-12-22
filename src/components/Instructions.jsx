import { useState } from 'react'
import styles from './Instructions.module.css'
import handPointer from '/hand_pointer.svg'

export default function Instructions() {
    const [started, setStarted] = useState(false)

    const handleStart = () => {
        setStarted(true)
    }

    return (
      <div style={{visibility: started ? 'hidden' : 'visible' }}
            className={`${styles.instructionsContainer} ${styles.showContainer}`}>
        <h1 className={styles.welcome}>Bienvenido!</h1>

        <div className={styles.instruction}>
            <h3 className={styles.instructionText}>Da click a un rábano para tallarlo</h3>
            <div>
                <div className={styles.blob} />
                <img src={handPointer} alt="handClick" className={styles.handClick}/>
            </div>
        </div>

        <div className={styles.instruction}>
            <h3 className={styles.instructionText}>Desliza para ver más rábanos</h3>
            <div>
                <div className={styles.mouse} />
                <img src={handPointer} alt="handPointer" className={styles.handPointer}/>
            </div>
        </div>

        <button className={styles.startButton} onClick={handleStart}>Empezar!</button>
      </div>
    )
  }