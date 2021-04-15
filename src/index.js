import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './pages/Home';
import Fruta from './pages/Fruta';

import './styles/global.css'


ReactDOM.render(

  <BrowserRouter>
  <Switch>
    <Route path="/fruta/:name" component={Fruta} exact  /> 
    <Route path="/" component={Home} exact /> 
  </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
