import React from 'react';
import {BrowserRouter,HashRouter}from 'react-router-dom';
import { Switch, Route ,Redirect} from 'react-router';
import Home from './views/Home';
import NotFound from './views/404';
const Router = BrowserRouter;

class App extends React.PureComponent{
  render(){
    return (
      <Router>
        <Switch>
          <Redirect exact from="/" to="/home"/>
          <Route exact path="/home" component={Home}/>
          <Route component={NotFound}/>
        </Switch>
      </Router>
    )
  }
}
export default App;