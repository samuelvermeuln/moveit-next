
import { ChallengesContext } from '../contexts/challengesContext'
import styles from '../styles/Components/CompletedChallenges.module.css'
import { useContext } from 'react';
import * as React from "react";

export function Completedchallenges () {
    const {challengescompletd} = useContext(ChallengesContext)


    return (
        <div className={styles.completedchallengesContainer}>
            <span>Desafios completos</span>
            <span>{challengescompletd}</span>
        </div>
    )
}