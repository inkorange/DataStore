import React from 'react'
import { render } from 'react-dom'
import { createHistory, useBasename } from 'history'
import { Router, Route, Link, IndexRoute, Redirect } from 'react-router'

// layouts
import MainLayout from './layouts/MainLayout';

// page components
import HomePage from './components/HomePage';

let injectTapEventPlugin = require('react-tap-event-plugin');

injectTapEventPlugin();

const history = useBasename(createHistory)({
  basename: '/'
})

render((
    <Router history={history} >
        <Route path="/" component={MainLayout}>
            <IndexRoute component={HomePage}/>
            // Load Area / Dashboard Routes
            <Route name="home" path="/home" component={HomePage} />
            <Route path="*" component={HomePage}/>
        </Route>
    </Router>
),  document.getElementById('app'))