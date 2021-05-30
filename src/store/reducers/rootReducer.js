import AuthReducer from './authReducer'
import ProjectReducer from './projectReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    auth: AuthReducer,
    projects: ProjectReducer
});

export default rootReducer