import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

// Child components
import Main from './pages/main.component.js';

// Additional imports
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <Router>
    <Main />
  </Router>,
  document.getElementById('root')
);
registerServiceWorker();
