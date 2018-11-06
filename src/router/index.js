import React from 'react';
import { Route, IndexRoute } from 'react-router';

import {
    App,
    Login,
    Panel
} from '../containers';

const routes = (
    <Route path={'/'} component={App}>
        <IndexRoute component={Login} />
        <Route path='panel' component={Panel} />
    </Route>
);

export default routes;