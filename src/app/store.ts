import {applyMiddleware, combineReducers, createStore} from 'redux'
import thunkMiddleware from 'redux-thunk'
import {notationsReducer} from "../components/notations/notations-reducer";


const rootReducer = combineReducers({
    notations: notationsReducer

})

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
export type AppRootStateType = ReturnType<typeof rootReducer>

