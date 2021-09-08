import { createStore, applyMiddleware } from 'redux'
import vetApp from '../reducers'
import thunk from 'redux-thunk'

const store = createStore(vetApp, applyMiddleware(thunk));

export default store