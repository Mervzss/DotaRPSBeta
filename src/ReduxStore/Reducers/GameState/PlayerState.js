import {JACK_EN_POY_PLAYER,SET_HERO_PLAYER, SKILL_SELF, RESET_CHANCE_PLAYER} from '../../ActionTypes/types'
import imageReturner from '../../../FunctionGenerator/AILogic/RPS/imageReturner'

const initialState={
    chosenHero: null,
    status:[],
    RPSImagepicked: null
}

export default reducerPS = (state = initialState, action) =>{
    switch(action.type){

        case JACK_EN_POY_PLAYER:
        return{
            ...state,
            chosenHero:{
                ...state.chosenHero,
                chanceTurn: action.playerResult === 'win'? true: false
            },
            RPSImagepicked: imageReturner(action.pickedRPS)
        }
        case SKILL_SELF:
        return{
            ...state,
            chosenHero: action.updateStatus,
            
        }
        case RESET_CHANCE_PLAYER:
        return{
            ...state,
            chosenHero:{
                ...state.chosenHero,
                chanceTurn: false
            },
        }
        case SET_HERO_PLAYER:
        return{
            ...state,
            chosenHero: action.chosenHero
        }
        default:
        return state
}
}