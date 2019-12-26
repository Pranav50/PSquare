import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Switch, Route, BrowserRouter} from 'react-router-dom'
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import 'react-mdl/extra/material.js'
import 'react-mdl/extra/css/material.css' 
import Details from './components/Details';

ReactDOM.render(
    <BrowserRouter basename='/PSquare/'>
            <Switch>
              <Route path="/" exact component={App} />
              <Route path="/details/:id" exact component={Details} />
            </Switch>
    </BrowserRouter>,
    document.getElementById("root")
  );

serviceWorker.unregister();
