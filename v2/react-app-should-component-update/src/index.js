import React from 'react';
import {render} from 'react-dom';
import App from './containers/App';

render(<App appTitle="Person Manager" />, document.querySelector('[data-js="root"]'));