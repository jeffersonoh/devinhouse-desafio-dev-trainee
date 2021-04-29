import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';

import PagesIndex from './index/Index';

const Root = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" component={PagesIndex}/>
            </Switch>
        </Router>
    )
}
export default Root;