import {applyMiddleware, combineReducers, createStore} from 'redux'
import thunkMiddleware from 'redux-thunk'
import {notationsReducer} from "../components/notation/notations-reducer";
const persistedState = localStorage.getItem('reduxState') ? JSON.parse(<string>localStorage.getItem('reduxState'))
    : {}

const rootReducer = combineReducers({
    notations: notationsReducer

})

export const store = createStore(rootReducer,persistedState, applyMiddleware(thunkMiddleware));
export type AppRootStateType = ReturnType<typeof rootReducer>

store.subscribe(()=>{
    localStorage.setItem('reduxState', JSON.stringify(store.getState()))
})