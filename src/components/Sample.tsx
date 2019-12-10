import React, { ReactElement } from 'react'

interface ISample {
  name: string
}

const Sample = ({ name }: ISample): ReactElement => <div>{name}</div>

export default Sample
