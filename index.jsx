import React from 'react';
import ReactDOM from 'react-dom';
import PostCss from './src/postcssdemos/PostCss.jsx'
import Grammer from './src/postcssdemos/grammer/Grammer.jsx'
import Plugins from './src/postcssdemos/plugins/Plugins.jsx'
import CrossRoad from './src/components/crossRoad/CrossRoad.jsx'

import { browserHistory, hashHistory, BrowserRouter, Route, Switch } from 'react-router-dom';


ReactDOM.render(
    (
        <BrowserRouter history={browserHistory}>
            <Switch>
                <Route path="/grammer" component={() => <Grammer />} />
                <Route path="/plugins" component={() => <Plugins />} />
                <Route path="/crossroad" component={() => <CrossRoad />} />
                <Route path="/" component={() => <PostCss />} />
            </Switch>
        </BrowserRouter>
    )
    , document.querySelector('#container'));