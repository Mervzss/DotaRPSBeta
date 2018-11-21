import { _PAPER_, _ROCK_, _SCISSOR_ } from '../../../GlobalData/RPSTypes/types'

export default rpsLogicAI = () =>{
    let AIPick = Math.random()

    if(AIPick > 0.66){
        return _ROCK_
    }
    else if(AIPick < 0.33){
        return _PAPER_
    }
    else{
        return _SCISSOR_
    }


}