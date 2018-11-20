import { combineReducers, createStore, applyMiddleware, compose} from 'redux'

import HeroSelectReducer from '../Reducers/HeroSelectReducer'

const CombineReducers = combineReducers(
    {
        HeroSelect: HeroSelectReducer
    }
)

let composeEnhancers = compose

if(__DEV__){
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
}

export default config = () =>{
    return createStore(CombineReducers, composeEnhancers())
}