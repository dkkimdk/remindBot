import React from 'react';
import Header from './components/header/header'
import { Switch, Route} from 'react-router-dom'
import Home from './pages/home/home'
import {hot} from "react-hot-loader";


export default hot(module) (() => {

    return (
        <div >
          <Header title = {'Remind Bot'} navigation = {['Work', 'About', 'Resume']}></Header>
          <Switch>
                  <Route path="/" component= {Home} exact />
                  <Route path="/david" render = { () => (<div>david kim</div>)} />
                  <Route path="/about" render = { () => (<div>about</div>)} />
                  <Route path="/work" render = { () => (<div>work</div>)} />
                  <Route path="/resume" render = { () => (<div>resume</div>)} />
  
          </Switch>
        </div>
    );
})