import { useState, useEffect } from 'react';
import styles from './Dialog.module.css'
import { dialogos } from '../store'

import pluma from '/pluma.png'
import iconClose from '/icon-close.svg'
import iconNext from '/next.png'

import { appState } from '../store';
import { useSnapshot } from 'valtio';

export default function Dialog(props) {
    const [dialog, setDialog] = useState(0);
    const [closed, setClosed] = useState(true);
    const snap = useSnapshot(appState)

    const fadeStyle = {
        opacity: closed ? 0 : 1,
        transition: 'opacity 500ms ease-in-out',
    };

    useEffect(() => {
        if(snap.instructionsClosed) {
            setTimeout(() => {
                setClosed(false)
            }, 2000)
        }
    }, [snap.instructionsClosed])

    const nextDialog = () => {
        if(dialog >= dialogos.length - 1)
            return

        setClosed(true);

        setTimeout(() => {
            setDialog((value) => value+1)
            setClosed(false)
        }, 500);
    }
    
    const previousDialog = () => {
        if(dialog < 1)
            return

        setClosed(true);

        setTimeout(() => {
            setDialog((value) => value-1)
            setClosed(false)
        }, 500);
    }

    return (
        <>
            <div className={styles.talker} onClick={() => setClosed((value) => !value)}>
                <img src={pluma} alt="danzante de la pluma" width={'50px'} height={'50px'} />
            </div>
            <div style={fadeStyle} className={styles.dialogContainer}>
                <div className={styles.dialogBox}>
                    <img src={iconClose} alt="close" className={styles.closeButton} onClick={() => setClosed(true)} />
                    <img src={iconNext} alt="next" className={styles.nextButton} onClick={nextDialog} hidden={dialog >= dialogos.length - 1}/>
                    <img src={iconNext} alt="previous" className={styles.previousButton} onClick={previousDialog} hidden={dialog < 1}/>
                    <div className={styles.text}>
                        {dialogos[dialog]}
                    </div>
                </div>
            </div>
        </>
    )
}