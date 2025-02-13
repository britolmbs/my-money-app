import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    dashboard: () => ({sumary: {credito: 100, debt: 50}})
})

export default rootReducer