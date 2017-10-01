
import React from 'react'
import { Router, Route, hashHistory, IndexRoute, browserHistory } from 'react-router'
import { MainContainer, DashboardContainer } from 'modules'

export default function getRoutes() {
  return (
    <Router history={hashHistory} >
        <Route path='/' component={MainContainer}>
          <Route path='/dash' component={DashboardContainer} />
        </Route>
    </Router>
  )
}

