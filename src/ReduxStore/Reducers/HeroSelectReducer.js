import { SELECT_HERO } from '../ActionTypes/types'

initialState={
    pickedHero: null
}

export default reducer = (state = initialState, action) =>{
    switch(action.type){
        case SELECT_HERO:
        return{
            ...state,
            pickedHero : action.name
        }
        default:
        return state
    }
}