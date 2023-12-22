import { appState } from '../store';
import { useSnapshot } from 'valtio'
import styles from './ClickMarks.module.css'

export default function ClickMarks(props) {
    const snap = useSnapshot(appState)

    return (
        <>
            <div className={`${styles.blob} ${styles.blob1}`} style={{ visibility: snap.carvingDone[0] ? 'hidden' : 'visible' }} />
            <div className={`${styles.blob} ${styles.blob2}`} style={{ visibility: snap.carvingDone[1] ? 'hidden' : 'visible' }} />
            <div className={`${styles.blob} ${styles.blob3}`} style={{ visibility: snap.carvingDone[2] ? 'hidden' : 'visible' }} />
        </>
    )
}