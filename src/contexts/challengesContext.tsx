import { match } from 'assert';
import { createContext, ReactNode, useState } from 'react';
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
    levelUp: () => void ;
    startNewChallenge:  () => void;
    resetChallenge:  () => void;
    experienceTonextLevel:number;
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
    

    function levelUp() {
        setLevel(level + 1);
    }

    function startNewChallenge(){
        const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
        const challenge = challenges[randomChallengeIndex];

        setActiveChallenge(challenge)
    }

    function resetChallenge() {
        setActiveChallenge(null)
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
            experienceTonextLevel
            }}
        >
            {children}
        </ChallengesContext.Provider>
    );
}