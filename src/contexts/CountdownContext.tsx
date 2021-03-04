import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { ChallengesContext } from "./challengesContext";

interface CountdownContextData {
    minutes: number;
    seconds: number;
    hashFinished: boolean;
    isActive: boolean;
    startCountdown: () => void;
    resetCountdown: () => void;
}

interface CountdownProviderProps {
    children: ReactNode;
}

export const CoutdownContext = createContext({} as CountdownContextData)

let CountdownTimeout : NodeJS.Timeout;

export function CountdownProvider ({  children  } : CountdownProviderProps ) {
    const {startNewChallenge} = useContext(ChallengesContext) 

const [time, setTime] = useState(0.1 * 60 );
const [isActive, setIsActive] = useState (false);
const [hashFinished, setHasFinished] = useState(false);


const minutes = Math.floor(time / 60); 
const seconds = time % 60;

function startCountdown () {
    setIsActive(true);
}

function resetCountdown () {
    clearTimeout(CountdownTimeout);
    setIsActive(false);
    setHasFinished(false);
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
        <CoutdownContext.Provider value={{
            minutes,
            seconds,
            hashFinished,
            isActive,
            startCountdown,
            resetCountdown,
        }}>
            {children}
        </CoutdownContext.Provider>
    )
} 