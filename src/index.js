import React from 'react';
import { render } from 'react-dom';
import Sidebar from './Sidebar';


const App = () => (
  <div className="app">
    <Sidebar />
    <div className="internal-page">
    </div>
  </div>
);

render(<App />, document.getElementById('root'));
