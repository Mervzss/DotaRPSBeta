import { SELECT_HERO } from '../ActionTypes/types'

export const heroSelect = (name) =>{
    return{
        type: SELECT_HERO,
        name: name
    }
}