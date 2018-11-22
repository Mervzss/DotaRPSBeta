import { combineReducers, createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'

import HeroSelectReducer from '../Reducers/HeroSelectReducer'
import PlayerStateReducer from '../Reducers/GameState/PlayerState'
import AIStateReducer from '../Reducers/GameState/AIState'

const CombineReducers = combineReducers(
    {
        HeroSelect: HeroSelectReducer,
        PlayerState: PlayerStateReducer,
        AIState: AIStateReducer
    }
)

let composeEnhancers = compose

if(__DEV__){
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
}

export default config = () =>{
    return createStore(CombineReducers, composeEnhancers(applyMiddleware(thunk)))
}