import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import CommissionCustomizationStore from './reducers/app.reducer.js';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

// Child components
import Main from './pages/main.component.js';

// Additional imports
import { BrowserRouter as Router } from 'react-router-dom';

let createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);
let store = createStoreWithMiddleware(CommissionCustomizationStore);

ReactDOM.render(
  <Router>
    <Provider store={ store }>
      <Main />
    </Provider>
  </Router>,
  document.getElementById('root')
);
registerServiceWorker();
