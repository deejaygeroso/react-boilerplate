import React, { FunctionComponent, ReactElement } from 'react'
import { Navigation } from '../common/components'
import { RouteComponentProps } from '@reach/router'

const About: FunctionComponent<RouteComponentProps> = (): ReactElement => {
  return (
    <div>
      <Navigation />
      <h2>About</h2>
    </div>
  )
}

export default About
