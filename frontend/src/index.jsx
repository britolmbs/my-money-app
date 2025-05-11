import React from "react";
import ReactDOM from 'react-dom'
import { applyMiddleware ,createStore } from "redux";
import { Provider } from 'react-redux'
import reducers from "./main/reducers"
import promisse from 'redux-promise'
import multi from 'redux-multi'
import {thunk} from 'redux-thunk'
//import registerServiceWorker from './registerServiceWorker'
import AuthOrApp from './main/AuthOrApp'

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
&& window.__REDUX_DEVTOOLS_EXTENSION__()
const store = applyMiddleware(multi, thunk, promisse)(createStore)(reducers, devTools)
ReactDOM.render(
    <Provider store={store}>
       <AuthOrApp />
    </Provider>
, document.getElementById('app'))
registerServiceWorker()