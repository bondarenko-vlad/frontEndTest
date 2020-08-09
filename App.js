import React from 'react';
import './App.css';
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom'
import Home from './components/home'
import Test from './components/Test'
import TestCss from './components/TestCSS'
import TestHtml from './components/TestHTML'





function App() {
  return (
    <div className="App">
    <BrowserRouter>
         <Switch>
           <Route  path='/home' component={Home} />
           <Route  path='/jsTest' component={Test} />
           <Route  path='/htmlTest' component={TestHtml} />
           <Route  path='/cssTest' component={TestCss} />
           <Redirect from='/' to='/home'/>
         </Switch>
    </BrowserRouter>
       </div>
  );
}

export default App;
