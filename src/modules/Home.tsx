import React, { FunctionComponent, ReactElement } from 'react'
import { Navigation } from '../common/components'
import { RouteComponentProps } from '@reach/router'

const Home: FunctionComponent<RouteComponentProps> = (): ReactElement => {
  return (
    <div>
      <Navigation />
      <h2>Home</h2>
    </div>
  )
}

export default Home
