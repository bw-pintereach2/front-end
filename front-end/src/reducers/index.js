import {combineReducers} from "redux"
import articles from "./articles"
import {usersLogin} from "./Login"
import {usersRegister} from "./Register"

export default combineReducers({
    articles,
    usersLogin,
    usersRegister
}) 