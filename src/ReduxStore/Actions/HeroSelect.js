import { SELECT_HERO } from '../ActionTypes/types'

export const heroSelect = (id) =>{
    return{
        type: SELECT_HERO,
        id: id
    }
}