import React,{Component} from 'react'
import './App.css';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Header from './components/header/header'
import Home from './components/home/home'
import About from './components/about/about'
import Form from './components/form/form'

export default class App extends Component{

  render(){

          return (
          <div className="App">
             <BrowserRouter>
                <Header />
                <Switch>
                    <Route exact={true} path="/" component={Home}/>
                    <Route exact={true} path="/about" component={About}/>
                    <Route exact={true} path="/form" component={Form}/>
                </Switch>
             </BrowserRouter>
          </div>
        );
    }
}



