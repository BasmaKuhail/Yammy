import React from 'react';
import './App.css';
import Home from './components/home';
import SignUp from './components/signUp';
import LoggedPage from './components/loggedPage';
import {Router, Switch, BrowserRouter, Route} from 'react-router-dom'; 
import Login from './components/login';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/SignUp" component={SignUp}/>
        <Route path="/Login" component={Login}/>
        <Route path="/loggedPage" component={LoggedPage}/>

      </Switch>
      
      </BrowserRouter>
  

      
       
    </div>
  );
}

export default App;
