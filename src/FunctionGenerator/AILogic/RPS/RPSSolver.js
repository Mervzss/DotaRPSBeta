import { _ROCK_, _PAPER_, _SCISSOR_ } from '../../../GlobalData/RPSTypes/types'

export default RPSSolver = (p, ai) => {
    switch (p) {
        case _ROCK_:
            if (ai === _SCISSOR_) {
                return 'win'
            }
            else if (ai === _PAPER_) {
                return 'lose'
            }
            return 'tie'
        case _PAPER_:
            if (ai === _ROCK_) {
                return 'win'
            }
            else if (ai === _SCISSOR_) {
                return 'lose'
            } 
            return 'tie'

        case _SCISSOR_:
            if (ai === _PAPER_) {
                return 'win'
            }
            else if (ai === _ROCK_) {
                return 'lose'
            }
            return 'tie'
        default:
            return 'error solving'
    }
}