import React from 'react';
import {render} from 'react-dom';
import App from './app'
require('./assets/styles/style.scss');

render(
    <div>
<div style={{height: 60, backgroundColor:'#7AC5DC', position:'relative'}}>

  </div>
      <App />
      </div>,
  document.getElementById('app')
);

module.hot.accept();