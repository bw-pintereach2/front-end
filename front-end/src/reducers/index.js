import { combineReducers } from 'redux'
import { article } from './articles'
import { Login } from './Login'
import { Register } from './Register'


export default combineReducers({
    article,
    Login,
    Register,


})
