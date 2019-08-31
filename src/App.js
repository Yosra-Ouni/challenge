import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { Switch, Route } from 'react-router-dom'
import PostsList from './Components/PostsList'
import PostDetails from './Components/PostDetails'

function App() {
  return (
    <Switch>
      <Route exact path='/' component={PostsList}/>
      <Route path='/:id' component={PostDetails}/>
    </Switch>
  );
}

export default App;
