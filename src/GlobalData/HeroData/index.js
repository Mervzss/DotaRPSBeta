import  { Sven } from './Sven'
import  { Ursa } from './Ursa'
import  { nulll } from './null'

//ID TYPES
import 
{
    HERO_SVEN, 
    HERO_URSA
} from '../idTypes'

export default Selection = (heroID) =>{
    switch(heroID){
        case HERO_SVEN:
        return Sven
        case HERO_URSA:
        return Ursa
        default:
        return nulll
    }
}