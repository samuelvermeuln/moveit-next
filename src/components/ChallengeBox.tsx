import { useContext } from 'react';
import { ChallengesContext } from '../contexts/challengesContext';
import styler from '../styles/Components/ChallengeBox.module.css'

export function ChallengeBox () {
    const {activeChallenge, resetChallenge} = useContext(ChallengesContext)



    return (
        <div className={styler.ChallengeBoxcontainer}>
            { activeChallenge ? (
                <div className={styler.challengeActive}>
                        <header>Ganhe {activeChallenge.amount} xp</header>

                        <main>
                            <img src={`icons/${activeChallenge.type}.svg` }/>
                            <strong>Novo desafio</strong>
                            <p>{activeChallenge.description}</p>
                        </main>

                        <footer>
                            <button 
                            type="button"
                            className={styler.challengeFailedButton}
                            onClick={resetChallenge}
                            >
                                Falhei
                                </button>
                            <button 
                            type="button"
                            className={styler.challengeSucceededButton}
                            >
                                Completei
                                </button>
                        </footer>                    
                </div>
            ) : (
                <div className={styler.ChallengeNotActive}>
                <strong>Inicie um ciclo para receber desafios a serem completados </strong>
                <p>
                    <img src="icons/Icon.svg" alt="Level Up"/>
                    Avance de level completando os desafios
                </p>
            </div>
            )}            
        </div>
    )
}