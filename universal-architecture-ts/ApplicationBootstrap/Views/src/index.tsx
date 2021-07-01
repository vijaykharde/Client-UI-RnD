import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import EarlyRedemption from './EarlyRedemption';
import RefinancingRates from './RefinancingRates';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux';
import { store } from './store';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeflex/primeflex.min.css';
import 'primeicons/primeicons.css';

import PrimeReact from 'primereact/api';

PrimeReact.ripple = true;

/*ReactDOM.render(
  <React.StrictMode>
    <App name="Vijay" />
  </React.StrictMode>,
  document.getElementById('root')
);*/
ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <EarlyRedemption name="ER-Vijay" />
            <RefinancingRates name="RR-Vijay" />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();