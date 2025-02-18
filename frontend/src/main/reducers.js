import { combineReducers } from 'redux'
import dashboardReducer from '../dashboard/dashboardReducer'
import TabReducer from '../common/tab/tabReducer'

const rootReducer = combineReducers({
    dashboard: dashboardReducer,
    tab: TabReducer
})

export default rootReducer