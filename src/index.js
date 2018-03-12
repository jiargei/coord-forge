import React from 'react';
import { render } from 'react-dom';
import Hello from './Hello';

const App = () => (
  <div>
    <h1>Hej from React</h1>
  </div>
);

render(<App />, document.getElementById('root'));
