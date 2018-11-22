import {JACK_EN_POY_PLAYER,SET_HERO_PLAYER, SKILL_SELF} from '../../ActionTypes/types'
import imageReturner from '../../../FunctionGenerator/AILogic/RPS/imageReturner'

const initialState={
    chosenHero: null,
    RPSImagepicked: null
}

export default reducerPS = (state = initialState, action) =>{
    switch(action.type){

        case JACK_EN_POY_PLAYER:
        // let val =state.chosenHero
        return{
            ...state,
            // chosenHero: val -(action.playerResult === 'lose'? 10: 0),
            RPSImagepicked: imageReturner(action.pickedRPS)
        }
        case SKILL_SELF:
        return{
            ...state,
            chosenHero: action.updateStatus
        }
        case SET_HERO_PLAYER:
        console.log("SETTING PLAER",action.chosenHero)
        return{
            ...state,
            chosenHero: action.chosenHero
        }
        default:
        return state
}
}