import React, { ReactElement } from 'react'
import About from './modules/About'
import Home from './modules/Home'
import { Router } from '@reach/router'
import './common/styles/app.css'

const App = (): ReactElement => {
  return (
    <Router>
      <About path='/about' component={About} />
      <Home path='/' component={Home} />
    </Router>
  )
}

export default App
