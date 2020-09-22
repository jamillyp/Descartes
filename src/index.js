import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import rootReducer from './Redux/reducers';
import ReduxThunk from 'redux-thunk';

ReactDOM.render(
  <Provider store={createStore(rootReducer, {}, applyMiddleware(ReduxThunk))}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
