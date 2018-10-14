import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from '../Header/Header';

const AppRouter = () => (
    <div>
        <Route exact path="/" component={Home} />
        <Route path="/Shopping" component={Shopping} />
        <Route path="/Updates" component={Updates} />
    </div>
);

export default AppRouter;