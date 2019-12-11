import React, { ReactElement } from 'react'
import { Switch, Route } from 'react-router-dom'

import About from './routes/About'
import Home from './routes/Home'
import Topics from './routes/Topics'
import Navigation from './routes/Navigation'

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
