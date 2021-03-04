import { useContext } from 'react';
import { ChallengesContext } from '../contexts/challengesContext';
import styler from '../styles/Components/Profile.module.css';

export function Profile (){
    const {level} = useContext(ChallengesContext);


    return (
        <div className={styler.profileContainer}>
            <img src="https://github.com/samuelvermeuln.png" alt="Samuel Vermeuln"/>
            <div>
                <strong>Samuel vermeuln...</strong>
                    <p>
                        <img src="icons/Up.svg" alt="Level"/>
                        Level {level}
                    </p>
            </div>
        </div>
    )
}