import React, { ReactElement } from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import About from './routes/About';
import Home from './routes/Home';
import Topics from './routes/Topics';

const App = (): ReactElement => {
  return (
    <div>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/topics'>Topics</Link>
        </li>
      </ul>
      <Switch>
        <Route path='/about' component={About} />
        <Route path='/topics' component={Topics} />
        <Route path='/' component={Home} />
      </Switch>
    </div>
  );
};

export default App;
