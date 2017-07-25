import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import CommissionCustomizationStore from './reducers/index.js';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

// Child components
import Main from './pages/main.component.js';

// Additional imports
import { BrowserRouter as Router } from 'react-router-dom';

let store = createStore(CommissionCustomizationStore);

ReactDOM.render(
  <Router>
    <Provider store={ store }>
      <Main />
    </Provider>
  </Router>,
  document.getElementById('root')
);
registerServiceWorker();
