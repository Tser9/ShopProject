import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {Auth0Provider} from "@auth0/auth0-react";
import Navbar from "./modules/navigation/nvabar";

ReactDOM.render(
<React.StrictMode>
      <BrowserRouter>
<Auth0Provider
    domain="dev-80926dwy.us.auth0.com"
               clientId="Wj5iG2VxDM1pNrGNWAjS2Zh7eS18uo91"
    redirectUri={window.location.origin}
               >
          <App />
</Auth0Provider>
      </BrowserRouter>
</React.StrictMode>,
  document.getElementById('root')
);

