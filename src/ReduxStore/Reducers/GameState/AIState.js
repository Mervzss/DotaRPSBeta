import {JACK_EN_POY_AI,SET_HERO_AI, SKILL_AI, ATTACK_AI} from '../../ActionTypes/types'
import imageReturner from '../../../FunctionGenerator/AILogic/RPS/imageReturner'

const initialState ={
    chosenAI: null,
    RPSImagepicked: null
}

export default reducerAIS = (state = initialState, action) =>{
    switch(action.type){
        case JACK_EN_POY_AI:
        // let val =state.chosenHero
        return{
            ...state,
            // chosenHero: val - (action.AIResult === 'lose'? 10: 0),
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

        case SET_HERO_AI:
        return{
            ...state,
            chosenAI: action.chosenAI
        }
        default:
        return state
}
}