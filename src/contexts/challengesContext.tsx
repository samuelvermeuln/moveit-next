import { createContext, ReactNode, useEffect, useState } from 'react';
import challenges from '../../challenges.json';

interface Challenge {
    type: 'body' | 'eye';
    description: string;
    amount: number;
}

interface chanllengescontextData {
    level:  number;
    currentExperience: number ;
    challengescompletd: number ;
    activeChallenge: Challenge;
    experienceTonextLevel:number;
    levelUp: () => void ;
    startNewChallenge:  () => void;
    resetChallenge:  () => void;
    completeChallenge:  () => void;
}

interface challengesProviderProps {
    children: ReactNode;
}

export const ChallengesContext = createContext({} as chanllengescontextData);


export function ChallengesProvider({children }: challengesProviderProps) {
    const [level, setLevel] = useState(1);
    const [currentExperience, setCurrentExperience] = useState(0);
    const [challengescompletd, setChallengescompletd] = useState(0);

    const [ activeChallenge, setActiveChallenge] = useState (null);

    const experienceTonextLevel = Math.pow((level + 1 ) * 4, 2)

    useEffect(() => {
        Notification.requestPermission();
    },  [])
    

    function levelUp() {
        setLevel(level + 1);
    }

    function startNewChallenge(){
        const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
        const challenge = challenges[randomChallengeIndex];

        setActiveChallenge(challenge);

        new Audio('/notification.mp3').play();

        if (Notification.permission === 'granted'){
            new Notification('novo desafio', {
                body: `valendo ${challenge.amount} Pts..`
            })
        }
    }

    function resetChallenge() {
        setActiveChallenge(null)
    }

    function completeChallenge() {
        if (!activeChallenge){
            return; //retorno void = vazio
        }

        const {amount } = activeChallenge;

        let finalExperience = currentExperience + amount;

        if(finalExperience >= experienceTonextLevel) {
            finalExperience = finalExperience - experienceTonextLevel;
            levelUp()
        }

        setCurrentExperience(finalExperience);
        setActiveChallenge(null);
        setChallengescompletd(challengescompletd + 1)
    }

    return (
        <ChallengesContext.Provider 
        value={{
            level, 
            currentExperience, 
            challengescompletd, 
            levelUp,
            startNewChallenge,
            activeChallenge,
            resetChallenge,
            experienceTonextLevel,
            completeChallenge
            }}
        >
            {children}
        </ChallengesContext.Provider>
    );
}