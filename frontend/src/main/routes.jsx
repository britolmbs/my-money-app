import React from "react";
import {Router, Route, IndexRouter, Redirect, hashHistory} from 'react-router'
import Dashboard from "../dashboard/dashboard";
import BillingCycle from "../billingCycle/billingCycle";

import AuthOrApp from './AuthOrApp'

export default props => (
    <Router history={hashHistory}>
        <Route path='/' component={AuthOrApp}>
            <IndexRouter component={Dashboard} />
    <Route path='billingCycles' component={BillingCycle} />
        </Route>
    <Redirect from='*' to='/' />
     </Router> 
)