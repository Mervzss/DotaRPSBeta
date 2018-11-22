import {JACK_EN_POY_PLAYER, SET_HERO_PLAYER, SKILL_AI, ATTACK_AI, SKILL_SELF} from '../../ActionTypes/types'

export const jackEnPoyPlayer = (rps,pResult) =>{
    return{ 
        type:JACK_EN_POY_PLAYER,
        pickedRPS: rps,
        playerResult: pResult
    }
}

export const generalSkill = (player, ai, target, skill) =>{

    return dispatch =>{
        switch(target){
            case 'enemy':
            dispatch(skillAI(skill(ai)))
            return
            case 'self':
            dispatch(skillSelf(skill(player)))
            return
            case 'any':
            dispatch(skillAI(skill(player)))
            dispatch(skillAI(skill(null,ai)))
            return
            default:
            return 'unknown target'
        }
    }
}

export const attackAI = (resStatus) =>{
    return{
        type: ATTACK_AI,
        updateStatus: resStatus
    }
}

export const skillAI = (resStatus) =>{
    return{
        type:SKILL_AI,
        updateStatus: resStatus
    }
}
export const skillSelf = (resStatus) =>{
    return{
        type:SKILL_SELF,
        updateStatus: resStatus
    }
}

export const setHeroPlayer = (chosenHero) => {
    return{ 
        type:SET_HERO_PLAYER,
        chosenHero: chosenHero
    }
}