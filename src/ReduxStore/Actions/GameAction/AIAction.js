import {JACK_EN_POY_AI, SET_HERO_AI, UPDATE_DEBUFF_AI, REMOVE_DEBUFF_AI} from '../../ActionTypes/types'

export const jackEnPoyAI = (rps,aiResult, updateDebuffs) => {
    
    return dispatch=>{ 

        dispatch(RPSDispatch(rps,aiResult))
        
        if(updateDebuffs.debuffID.length !== 0){

            dispatch(aiDebuffUpdate(updateDebuffs.debuffID))
            
            let i = 0
            let id = updateDebuffs.debuffID
            do{
                if(updateDebuffs.debuffHash[id[i]].interval === -1 ){
                    dispatch(aiDebuffRemove(id[i]))
                }
                  i += 1
            }while( i < id.length)
            // console.log(newUpdate)
           
        }
        
    }
}

export const aiDebuffRemove = (debuffID) =>{
    return{
        type:REMOVE_DEBUFF_AI,
        debuffID : debuffID
    }
}

export const RPSDispatch = (rps, aiResult) =>{
    return{ 
        type:JACK_EN_POY_AI,
        pickedRPS: rps,
        AIResult: aiResult
    }
}

export const aiDebuffUpdate = (debuffID) =>{
    // console.log(aiUpdateDebuff)
    return{
        type: UPDATE_DEBUFF_AI,
        debuffID: debuffID
    }
}

export const setHeroAI = (chosenAI) => {
    return{ 
        type:SET_HERO_AI,
        chosenAI: chosenAI
    }
}