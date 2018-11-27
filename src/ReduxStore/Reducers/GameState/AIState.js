import 
{
    JACK_EN_POY_AI,
    SET_HERO_AI, 
    SKILL_AI, ATTACK_AI, 
    DEBUFFING_AI, 
    UPDATE_DEBUFF_AI,
    REMOVE_DEBUFF_AI
} from '../../ActionTypes/types'

import imageReturner from '../../../FunctionGenerator/AILogic/RPS/imageReturner'

const initialState ={
    chosenAI: null,
    status:[],
    RPSImagepicked: null
}

export default reducerAIS = (state = initialState, action) =>{
    switch(action.type){

        case JACK_EN_POY_AI:
        return{
            ...state,
            RPSImagepicked: imageReturner(action.pickedRPS)
        }

        case SKILL_AI:
        return{
            ...state,
            chosenAI: action.updateStatus
        }

        case ATTACK_AI:
        return{
            ...state,
            chosenAI: action.updateStatus
        }

        case DEBUFFING_AI:
        const reDebuff = state.chosenAI.debuff.debuffID.filter(item => {

            return item === action.id // return all the items not matching the action.id
    
          })
          console.log(reDebuff)
          let arrayUpdate
          if(reDebuff.length === 0){
            arrayUpdate = [...state.chosenAI.debuff.debuffID, action.id]

            state.chosenAI.debuff.debuffHash = {
                ...state.chosenAI.debuff.debuffHash,
                [action.id]: action.addDebuff
            }
          }
          else{
            arrayUpdate = [...state.chosenAI.debuff.debuffID]
            state.chosenAI.debuff.debuffHash={
                ...state.chosenAI.debuff.debuffHash,
                [action.id]:{
                    ...state.chosenAI.debuff.debuffHash[action.id],
                    stack: state.chosenAI.debuff.debuffHash[action.id].stack + 1,
                    interval: action.addDebuff.interval
                }
            }
            // state.chosenAI.debuff.debuffHash[action.id] = {
            //     ...state.chosenAI.debuff.debuffHash[action.id],
            //     stack: state.chosenAI.debuff.debuffHash[action.id].stack + 1,
            //     interval: action.addDebuff.interval
            // }
          }
         
        return {
            ...state,
            chosenAI:{
                ...state.chosenAI,
                debuff:{
                    ...state.chosenAI.debuff,
                    debuffID:
                    arrayUpdate,
                    // debuffHash:{
                    //     ...state.chosenAI.debuff.debuffHash,
                    //     // ...state.chosenAI.debuff.debuffHash,
                    //     // [action.id]: action.addDebuff
                    // }
                  }
                    },
                    
            }
            
        case UPDATE_DEBUFF_AI:
        
        let i = 0
        let id = action.debuffID
        // console.log(state.chosenAI.debuff.debuffHash[id[i]])        
        do{
            state.chosenAI.debuff.debuffHash[id[i]] = {

                ...state.chosenAI.debuff.debuffHash[id[i]],
        
                interval : (state.chosenAI.debuff.debuffHash[id[i]].interval - 1)
        
              }
              if(state.chosenAI.debuff.debuffHash[id[i]].interval >= 0){
              state.chosenAI.stats.HP -= state.chosenAI.debuff.debuffHash[id[i]].DMGperTurn
              }
              i += 1
        }while( i < action.debuffID.length)
        
        return {
            ...state,
        }
        case REMOVE_DEBUFF_AI:

        const refreshedID = state.chosenAI.debuff.debuffID.filter(item => {

            return item !== action.debuffID // return all the items not matching the action.id
    
          })
    
          delete state.chosenAI.debuff.debuffHash[action.debuffID] // delete the hash associated with the action.id
    
          
    
          return {
            ...state,
            chosenAI:{
                ...state.chosenAI,
                debuff:{
                    ...state.chosenAI.debuff,
                    debuffID: refreshedID,
                    debuffHash: state.chosenAI.debuff.debuffHash
                }
            }
            // state.chosenAI.debuff.debuffID: refreshedID,
    
            // byHash: state.byHash
    
          }

        case SET_HERO_AI:
        return{
            ...state,
            chosenAI: action.chosenAI
        }
        default:
        return state
}
}