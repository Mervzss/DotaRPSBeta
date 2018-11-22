import {_ROCK_, _PAPER_, _SCISSOR_} from '../../../GlobalData/RPSTypes/types'

export default imageReturn = (value) =>{
    switch(value){
        case _ROCK_:
        return require('DotaRPSBeta/assets/RPS/rock.png')
        case _PAPER_:
        return require('DotaRPSBeta/assets/RPS/paper.png')
        case _SCISSOR_:
        return require('DotaRPSBeta/assets/RPS/scissors.png')
        default:
        return null
    }

}