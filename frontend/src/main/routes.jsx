import React from "react";
import { Switch, Route, Redirect, Routes } from 'react-router'
import Dashboard from "../dashboard/dashboard";
import BillingCycle from "../billingCycle/billingCycle";

import AuthOrApp from './AuthOrApp';

const AppRoutes= () => (
    <AuthOrApp>
        <div className="content-wrapper">
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/billingCycles" element={ <BillingCycle />} />
                <Route path="*" element={ <Navigate to='/' replace />} />
            </Routes>
        </div>
    </AuthOrApp>
);

export default AppRoutes;