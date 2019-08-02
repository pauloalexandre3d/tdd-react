import React from 'react';
import ReactDOM from 'react-dom';
import Root from 'Root';
import App from './components/App';
import { Router, BrowserRoute } from 'react-router-dom';

ReactDOM.render(
  <Root>
    <BrowserRoute>
      <Router path="/" component={App} />
    </BrowserRoute>
  </Root>,
  document.querySelector('#root')
);
