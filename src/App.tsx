import React, { ReactElement } from 'react'
import { Route, Switch } from 'react-router-dom'

import About from './routes/About'
import Home from './routes/Home'
import Navigation from './routes/Navigation'
import Topics from './routes/Topics'

const App = (): ReactElement => {
  return (
    <div>
      <Navigation />
      <Switch>
        <Route path='/about' component={About} />
        <Route path='/topics' component={Topics} />
        <Route path='/' component={Home} />
      </Switch>
    </div>
  )
}

export default App
