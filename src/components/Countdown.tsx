import { useState,  useEffect } from 'react'
import styles from '../styles/Components/Countdown.module.css'

export function Countdown () {
const [time, setTime] = useState(25 * 60 );
const [active, setActive] = useState (false);

const minutes = Math.floor(time / 60); 
const seconds = time % 60;

// essa const ela minutos a esquerda e minutos a direita tranforma em string 
// e divide o valor em dois 12 -> '1' '2' caso seja apenas 1 numero ele colca 0 
// split vazia que ta fazendo essa separação 
const [ minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split(' ');
const [ secondsLeft, secondsRight] = String(seconds).padStart(2, '0').split(' ');

function startCountdown () {
    setActive(true);
}

useEffect(() => {
    if (active && time > 0){
        setTimeout (() => {
            setTime(time - 1);
        }, 1000)
    }
}, [active, time])


    return (
        <div>
            <div className={styles.countdownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondsLeft}</span>
                    <span>{secondsRight}</span>
                </div>
            </div>

            <button type="button" 
            className={styles.countdownButton}
            onClick={startCountdown}
            >
                Iniciar um ciclo
            </button>
        </div>
    )
}