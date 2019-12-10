import React, { useState } from 'react'
import Sample from './components/Sample'

function App () {
  const [name, setName] = useState('')

  return (
    <div>
      <h1>Hello World</h1>
      <Sample name={name} />
      <button onClick={()=>setName('Hi Deejay')}>Say hello</button>
    </div>
  )
}

export default App
