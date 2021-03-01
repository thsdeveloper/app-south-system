import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Auth0Provider} from "@auth0/auth0-react";
import {ComicProvider} from "./hooks/Comic";
ReactDOM.render(
  <Auth0Provider domain="dev-z1hd6i48.us.auth0.com" clientId="HrFr5px2BlAmxcsaF4G6oBauNBDqG8Jf" redirectUri={window.location.origin}>
    <ComicProvider>
      <App/>
    </ComicProvider>
  </Auth0Provider>,
  document.getElementById('root')
);
