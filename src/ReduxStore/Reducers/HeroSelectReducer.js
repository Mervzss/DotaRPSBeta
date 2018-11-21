import { SELECT_HERO } from '../ActionTypes/types'
import Selection from '../../GlobalData/HeroData'
import { nulll } from '../../GlobalData/HeroData/null'
initialState={
    pickedHero: nulll
}

export default reducer = (state = initialState, action) =>{
    switch(action.type){
        case SELECT_HERO:
        return{
            ...state,
            pickedHero : Selection(action.id)
        }
        default:
        return {
            ...state,
            pickedHero: nulll
        }
    }
}