import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route} from 'react-router-dom'
import Fruta from './pages/Fruta';
import Home from './pages/Home';

import './styles/global.css'

ReactDOM.render(

  <BrowserRouter>
  <Switch>
    <Route path="/" component={Home} exact /> 
    <Route path="/fruta" component={Fruta}  /> 
  </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);


