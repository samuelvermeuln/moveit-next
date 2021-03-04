
import { useContext } from 'react';
import {CoutdownContext} from '../contexts/CountdownContext';
import styles from '../styles/Components/Countdown.module.css';


//javascrip puro top 

export function Countdown () {
    const { 
        minutes,    
        seconds,    
        hashFinished,   
        isActive,   
        startCountdown, 
        resetCountdown
        } = 
        useContext(CoutdownContext);


// essa const ela minutos a esquerda e minutos a direita tranforma em string 
// e divide o valor em dois 12 -> '1' '2' caso seja apenas 1 numero ele colca 0 
// split vazia que ta fazendo essa separação 
    const [ minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split(' ');
    const [ secondsLeft, secondsRight] = String(seconds).padStart(2, '0').split(' ');




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
                            {/* <button type="button"
                            className={styles.countdownButton}
                            >
                                Desistir 
                            </button>            */}
                    </>
                )}

                
        </div>
    )
}