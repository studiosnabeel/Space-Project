import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { HashRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './Redux/configureStore';

import { fetchRocketApi } from './Redux/rocketSlice';

// We use store.dispatch over here to call the async function to fetch api data when app loads

store.dispatch(fetchRocketApi());
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
);
