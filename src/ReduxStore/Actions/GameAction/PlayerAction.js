import 
{
    JACK_EN_POY_PLAYER, 
    SET_HERO_PLAYER, SKILL_AI, 
    ATTACK_AI, SKILL_SELF, 
    RESET_CHANCE_PLAYER,
    DEBUFFING_AI
} from '../../ActionTypes/types'


export const jackEnPoyPlayer = (rps,pResult) =>{
    return dispatch =>{ 
        dispatch(RPSDispatch(rps,pResult))

    }
}

export const RPSDispatch = (rps, pResult) =>{
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
            dispatch(resetChance())
            return
            case 'self':
            dispatch(skillSelf(skill(player)))
            dispatch(resetChance())
            return
            case 'any':
            dispatch(skillAI(skill(player)))
            dispatch(skillAI(skill(null,ai)))
            dispatch(resetChance())
            return
            default:
            return 'unknown target'
        }
    }
}

export const attackAI = (resStatus) =>{
    return dispatch=>{
        dispatch(attackAIDispatch(resStatus))
        dispatch(resetChance())        
    }
}

export const attackAIDispatch = (resStatus) =>{
    return {
            type: ATTACK_AI,
            updateStatus: resStatus       
    }
}

export const debuffingAI = (debuffStatus, nameID) =>{
    return{
        type: DEBUFFING_AI,
        id: nameID,
        addDebuff : debuffStatus
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
export const resetChance = () =>{
    return{
        type:RESET_CHANCE_PLAYER,
    }
}


export const setHeroPlayer = (chosenHero) => {
    return{ 
        type:SET_HERO_PLAYER,
        chosenHero: chosenHero
    }
}