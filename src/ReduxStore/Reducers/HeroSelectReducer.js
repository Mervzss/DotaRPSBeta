import { SELECT_HERO } from '../ActionTypes/types'
import Selection from '../../GlobalData/HeroData'
import { nulll } from '../../GlobalData/HeroData/null'

const initialState={
    pickedHero: nulll,
    isPicked: true
}

export default reducerHero = (state = initialState, action) =>{
    switch(action.type){
        case SELECT_HERO:
        return{
            ...state,
            pickedHero : Selection(action.id),
            isPicked: false
        }
        default:
        return state
    }
}