import { useContext } from 'react';
import { ChallengesContext } from '../contexts/challengesContext';
import styles from '../styles/Components/ExperienceBar.module.css';

export function ExperienceBar () {
    const {currentExperience,experienceTonextLevel} = useContext(ChallengesContext);

    const percentToNexteLEvel = Math.round (currentExperience *100) / experienceTonextLevel;

    return(
        <header className={styles.experienceBar}>
            <span>0 xp</span>
            <div>
                <div style={{ width: `${percentToNexteLEvel}%`}} />

                <span className={styles.currentExperience} style={{left:`${percentToNexteLEvel}%`}}>
                    {currentExperience} px
                </span>
            </div>
            <span>{experienceTonextLevel} xp</span>
        </header>
        );
}