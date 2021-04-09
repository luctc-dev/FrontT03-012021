import './assets/css/bootstrap-tcl.css';
import './assets/css/main.css';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";
import store from './store';
import { i18n } from '@lingui/core'
import { I18nProvider } from '@lingui/react'
import { messages as messagesVi } from './locales/vi/messages'
import { en, vi, zh, fr } from 'make-plural/plurals'

i18n.loadLocaleData({
  en: { plurals: en },
  vi: { plurals: vi },
  zh: { plurals: zh },
  fr: { plurals: fr }
})

i18n.load('vi', messagesVi)
i18n.activate('vi')

ReactDOM.render(
  <React.StrictMode>
    <I18nProvider i18n={i18n}>
      <Provider store={store} >
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </I18nProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
