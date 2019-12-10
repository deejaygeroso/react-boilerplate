import React, { useState, ReactElement } from 'react';
import Sample from './components/Sample';

function App(): ReactElement {
  const [name, setName] = useState('');

  return (
    <div>
      <h1>Hello World</h1>
      <Sample name={name} />
      <button onClick={(): void => setName('Hi Deejay')}>Say hello</button>
    </div>
  );
}

export default App;
