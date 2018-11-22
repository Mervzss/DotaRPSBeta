import {JACK_EN_POY_AI, SET_HERO_AI} from '../../ActionTypes/types'

export const jackEnPoyAI = (rps,aiResult) => {
    return{ 
        type:JACK_EN_POY_AI,
        pickedRPS: rps,
        AIResult:aiResult
    }
}

export const setHeroAI = (chosenAI) => {
    return{ 
        type:SET_HERO_AI,
        chosenAI: chosenAI
    }
}