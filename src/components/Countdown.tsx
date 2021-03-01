import { useState,  useEffect, useContext } from 'react'
import { ChallengesContext } from '../contexts/challengesContext';
import styles from '../styles/Components/Countdown.module.css'


//javascrip puro top 
let CountdownTimeout : NodeJS.Timeout;

export function Countdown () {
const {startNewChallenge} = useContext(ChallengesContext) 


const [time, setTime] = useState(0.1 * 60 );
const [isActive, setIsActive] = useState (false);
const [hashFinished, setHasFinished] = useState(false);


const minutes = Math.floor(time / 60); 
const seconds = time % 60;

// essa const ela minutos a esquerda e minutos a direita tranforma em string 
// e divide o valor em dois 12 -> '1' '2' caso seja apenas 1 numero ele colca 0 
// split vazia que ta fazendo essa separação 
const [ minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split(' ');
const [ secondsLeft, secondsRight] = String(seconds).padStart(2, '0').split(' ');

function startCountdown () {
    setIsActive(true);
}

function resetCountdown () {
    clearTimeout(CountdownTimeout);
    setIsActive(false);
    setTime(0.1 * 60);
}

useEffect(() => {
    if (isActive && time > 0){
        CountdownTimeout = setTimeout (() => {
            setTime(time - 1);
        }, 1000)
    } else if (isActive && time === 0) {
        setHasFinished(true);
        setIsActive(false);
        startNewChallenge( );
    }
}, [isActive, time])


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

                {hashFinished  ? (
                    <button 
                    
                    disabled
                    className={styles.countdownButton}                    
                    >                
                        Ciclo Encerrado
                        <img src="http://kiosk.colegiodoave.pt/Content/New/icon/portal/certo_portal_sige.svg" alt="Certo"/>
                        <div id="linha-horizontal"></div>
                    </button>              
                ) : (
                    <>
                            {isActive ? (
                            <button type="button" 
                            className={`${styles.countdownButton} ${styles.countdownButtonActive} `}
                            onClick={resetCountdown}
                            >                
                                Abandonar Ciclo
                            </button>
                            ) : (
                            <button type="button" 
                            className={styles.countdownButton}
                            onClick={startCountdown}
                            >                
                                Iniciar Ciclo
                            </button>
                            )}            
                    </>
                )}

                
        </div>
    )
}