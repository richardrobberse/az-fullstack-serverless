import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Main from 'Main'
import Todos from 'containers/pages/Todos'

const AppRouter = () => {
  return (
    <Router>
      <Main>
        <Switch>
          <Route path="/" exact render={() => <Redirect to="/todos" />} />
          <Route path="/todos" exact component={Todos} />
        </Switch>
      </Main>
    </Router>
  )
}

export default AppRouter
