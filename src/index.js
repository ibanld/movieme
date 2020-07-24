import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// React redux
import { Provider } from 'react-redux'
import { store, persistor } from './redux'

// Redux persist 
import { PersistGate } from 'redux-persist/integration/react'


import App from './App';



ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);


