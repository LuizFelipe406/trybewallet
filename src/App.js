import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Wallet from './pages/Wallet';

function App() {
  return (
    <Switch>
      <Route path="/trybewallet/carteira" component={ Wallet } />
      <Route path="/" component={ Login } />
    </Switch>
  );
}

export default App;
